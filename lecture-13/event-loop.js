'use strict';

document.addEventListener('DOMContentLoaded', () => {
    console.log('A');
    const p = Promise.resolve('B');
    p.then(console.log);
});

console.log('C');

setTimeout(() => {
    console.log('D');
}, 0);
