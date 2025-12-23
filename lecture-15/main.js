// import isEven from './node_modules/is-even/index.js';

import info from './default.js';
import { square, data as math } from './esm.js';

console.log(square(5));
console.log(math.PI);
console.log(info);
// console.log(isEven(10));

// if (confirm()) {
//     import info from './default.js';
// }

setTimeout(() => {
    console.log(info.c);
}, 5000);
