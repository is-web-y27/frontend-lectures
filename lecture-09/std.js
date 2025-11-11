let anotherData = [{
    name: 'Roma',
    "age": 30,
    5: 98,
    false: 98,
    let: 'works',
},
{
    name: 'Roma',
    "age": 30,
    5: 98,
    false: 98,
    let: 'works',
}
];

// Встроенные в язык

console.table(anotherData);
console.warn('Don\'t do this');
console.info('Do this instead: ...');

const regexp = RegExp(/[0-9]+/);
console.log(regexp.test('10027724'));

console.log(Math.cbrt(27));
console.log('Hello World'.toUpperCase());

let now = Date.now();
console.log(now);
console.log(Date());

// Встроенные в браузер

console.log(window);
console.log(document);
console.log(history);
