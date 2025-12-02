'use strict';

function addSections(amount) {
    const main = document.getElementsByTagName('main')[0];
    for (let index = 0; index < amount; index++) {
        const section = document.createElement('section');
        main.append(section);
    }
}

document.getElementById('add-sections-100').addEventListener('click', () => {
    const start = performance.now();
    addSections(100);
    console.log(performance.now() - start);
});

document.getElementById('add-sections-1000').addEventListener('click', () => {
    const start = performance.now();
    addSections(1000);
    console.log(performance.now() - start);
});

document.getElementById('change-size').addEventListener('click', () => {
    const start = performance.now();
    const sections = document.querySelectorAll('main :nth-child(even)');
    for (const element of sections) {
        element.style.width = '450px';
    }
    console.log(performance.now() - start);
});

const colors = ['darkred', 'gold', 'forestgreen', 'navy'];

document.getElementById('change-color').addEventListener('click', () => {
    const start = performance.now();
    const sections = document.querySelectorAll('main section');
    for (const element of sections) {
        let color = colors[Math.floor(Math.random() * colors.length)];
        element.innerText = color;
        element.style.backgroundColor = color;
    }
    console.log(performance.now() - start);
});
