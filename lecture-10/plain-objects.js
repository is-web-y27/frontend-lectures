let user = {
    firstName: 'Nikolai',
    lastName: 'Andreev',
    age: 27,
    var: {},
    'additional-info': {},

    get name() {
        return `${this.firstName} ${this.lastName}`;
    },

    set name(value) {
        [this.firstName, this.lastName] = value.split(' ');
    }
};

user.email = 'nvandreev@itmo.ru';

console.log(user);

// delete user.name;

// console.log(user);

// let another = user;
// another.name = 'Roman Makarevich';
// console.log(user);

const admin = {
    name: 'Alex M',
    email: 'mayatin@itmo.ru',
};

console.log(admin);

admin.roles = [];

console.log(admin);

console.log(user['name']);
console.log(user.var);

let empty = null;
console.log(empty?.name);

let age = 30;
let name = 'Roma';

let another = { name, age };
// let another = { name: name, age: age };
console.log(another);

user.name = 'Nick Andreev';
console.log(user);

Object.defineProperty(user, 'password', {
    value: '12345678',
    writable: false,
    enumerable: false,
    configurable: false,
});

console.log(user);

user.password = '87654321';

for (const key in user) {
    const element = user[key];
    console.log(element);
}

Object.freeze(user);
user.name = 'Test';
console.log(user);
