'use strict';

// alert('Hello World!');

console.log(typeof 5);          // number
console.log(typeof 5.14);       // number
console.log(typeof 'Hello');    // string
console.log(typeof 'a');        // string
console.log(typeof false);      // boolean
console.log(typeof 1n);         // bigint
console.log(typeof {});         // object
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
console.log(typeof Symbol());   // symbol

{
    // Видимость внутри функции или до конца скрипта
    var x = 5;

    // Видимость до конца блока
    let y = 9;
    const z = 15;

    console.log(x, y, z);
}

// a = 19;
// console.log(a);

let s = Symbol();
let key = 'place';

let data = {
    name: 'Roma',
    "age": 30,
    5: 98,
    false: 98,
    let: 'works',
    [s]: 'hidden',
    [key]: 'double apple'
};

console.log(data);

let numbers = [8, 'hello', false];
console.log(numbers);

numbers[999] = 'test';
// console.log(numbers);

if (5 > 3) {
    console.log('YES');
} else {
    console.log('NO');
}

for (const key in numbers) {
    console.log(key);
}

for (const element of numbers) {
    console.log(element);
}

try {
    throw new Error("My error :(");
} catch (e) {
    console.error(e);
}

function getSum(a, b) {
    return a + b;
}

const getProd = function (a, b) {
    return a * b;
}

const getDiff = (a, b) => a - b;

console.log(getSum('5'));
console.log(getProd('5', 2));
console.log(getDiff('5', 2));
