'use strict';

class User {
    constructor(firstName, lastName, age) {
        // this = {};

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Admin extends User {
    #role;

    constructor(firstName, lastName, age, role) {
        super(firstName, lastName, age);
        this.#role = role;
    }

    hasAccess() {
        return this.#role === 'SUPERADMIN';
    }

    static availableRoles() {
        return ['MODERATOR', 'ADMIN', 'SUPERADMIN'];
    }
}

let user = new User('Ser', 'Papikian', 23);
console.log(user);
console.log(user.fullName);

let admin = new Admin('A', 'M', 48, 'MODERATOR');
// console.log(admin.#role);
