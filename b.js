const request = require('request');

function cong(soA, soB, cb) {
    const isTypeOk = typeof soA !== 'number' || typeof soB !== 'number';
    if (isTypeOk) return cb(new Error('Type error'));
    const url = `http://localhost:3000/tinh/CONG/${soA}/${soB}`;
    request(url, (err, response, data) => {
        cb(err, data);
    });
}

function congPromise(soA, soB) {
    // Promise
    return new Promise((resolve, reject) => {
        const isTypeOk = typeof soA !== 'number' || typeof soB !== 'number';
        if (isTypeOk) return reject(new Error('Type error'));
        const url = `http://localhost:3000/tinh/CONG/${soA}/${soB}`;
        request(url, (err, response, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

congPromise(5, 10)
.then(tong => console.log('THANH CONG: ' + tong))
.catch(err => console.log(err.message));
