'use strict';

console.log(document.cookie);
console.log(encodeURI('data={ a: 4 }'));

document.cookie = encodeURI('data={ a: 4 }');
document.cookie = encodeURI('theme=dark');

localStorage.setItem('account', 'Bakasa');
window.addEventListener('storage', ({key, oldValue, newValue}) => {
    console.log(`Changed ${key} from ${oldValue} to ${newValue}`);
});

document.querySelector('body').addEventListener('blur', () => {
    console.log('Focus is lost');
})
