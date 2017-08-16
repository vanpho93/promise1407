const express = require('express');
const queryDb = require('./db');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    queryDb('SELECT * FROM "Product"', [])
    .then(result => res.render('home', { products: result.rows }))
    .catch(err => res.send(err.message));
});

app.listen(3000, () => console.log('Server started!'));
