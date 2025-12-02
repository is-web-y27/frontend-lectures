// 'use strict';

a = { b: 8, c: 3 };
console.log(a);

NaN = 'hi';
console.log(NaN);

delete NaN;
console.log(NaN);

// !?
let user = {
    name: 'Nikolai Andreev',
    email: 'nvandreev@itmo.ru',
    email: 'me@bakasa.dev',
};

console.log(user);

function sum(a, a, c) {
    return a + a + c;
}

console.log(sum(5, 6, 7));

console.log(0123);

const s = 'test';
s.test = 'Hello!';
console.log(s);
console.log(s.test);
