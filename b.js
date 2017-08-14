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
