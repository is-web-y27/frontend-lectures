'use strict';

const section = document.querySelector('section');
const main = document.querySelector('main');

main.addEventListener('click', function(event) {
    this.style.backgroundColor = 'firebrick';
    event.stopPropagation();
}, true);

section.addEventListener('click', function() {
    this.style.backgroundColor = 'pink';
});
