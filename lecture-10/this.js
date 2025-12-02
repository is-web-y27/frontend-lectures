'use strict';

let user = {
    firstName: 'Nikolai',
    lastName: 'Andreev',
    age: 27,

    notify: function(text) {
        let fullText = `Dear ${this.firstName} ${this.lastName}!\n${text}`;
        console.log('Sending...');
        console.log(fullText);
    },

    // !?
    anotherTest: () => {
        console.log(this);
    },

    get name() {
        return `${this.firstName} ${this.lastName}`;
    },

    set name(value) {
        [this.firstName, this.lastName] = value.split(' ');
    }
};

function changePassword(newPassword) {
    // Do some hashing...
    this.password = newPassword;
}

user.notify('You are registered');
user.changePassword = changePassword;
user.changePassword('qwerty123456');
console.log(user);

// ---

// Глобальный объект (window)
console.log(this);

// В функции
function test() {
    console.log(this);
}

test();

let testWithThis = test.bind({ count: 25, avg: 9 });
testWithThis();

const anotherTest = () => {
    console.log(this);
}

anotherTest();
user.anotherTest();

document.addEventListener('mousedown', function() {
    console.log(this);
});

click.addEventListener('mousedown', function() {
    console.log(this);
});
