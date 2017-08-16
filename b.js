const request = require('request');

function cong(soA, soB) {
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

function nhan(soA, soB) {
    return new Promise((resolve, reject) => {
        const isTypeOk = typeof soA !== 'number' || typeof soB !== 'number';
        if (isTypeOk) return reject(new Error('Type error'));
        const url = `http://localhost:3000/tinh/NHAN/${soA}/${soB}`;
        request(url, (err, response, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

function chia(soA, soB) {
    return new Promise((resolve, reject) => {
        const isTypeOk = typeof soA !== 'number' || typeof soB !== 'number';
        if (isTypeOk) return reject(new Error('Type error'));
        if (soB === 0) return reject(new Error('Divide by 0'));
        const url = `http://localhost:3000/tinh/CHIA/${soA}/${soB}`;
        request(url, (err, response, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

const tinhDienTich = async (a, b, h) => {
    const tong = await cong(a, b);
    const tich = await nhan(+tong, h);
    const kq = await chia(+tich, 2);
    return kq;
};

// tinhDienTich(5, 10, 2)
// .then(x => console.log(x))
// .catch(err => console.log(err.message));

// (a + b) * h / 2 -> 3
// (a + b) (h / 2) -> 2

Promise.all([cong('5', 10).catch(e => 100), chia(2, 2)])
.then(x => console.log(x))
.catch(err => console.log(err.message));

// Promise.race([cong(5, 10), chia(2, 2)])
// .then(x => console.log(x))
// .catch(err => console.log(err));
