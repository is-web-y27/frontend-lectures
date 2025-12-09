'use strict';

let p = new Promise((resolve, reject) => {
    for (let index = 0; index < 10000; index++) {
        console.log('Prom');
        if (index == 5000) {
            reject('Code is broken');
            return;
        }
    }

    resolve(1);
});

const sleep = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(1) }, 5000);
});

console.log(sleep);

sleep
    .then(console.log)
    .catch(console.error)
    .finally(() => { console.log('Done') });

// Promise.any([]);
// Promise.all([]);
// Promise.allSettled([]);
