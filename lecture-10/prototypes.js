function User(firstName, lastName, age) {
    // this = {};

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // return this;
}

let user = new User('Roman', 'Makarevich', 30);
console.log(user);

let base = {
    name: 'Admin Admin',
    age: 99,
    greet() {
        alert(`Hello ${this.name} ${this.age}`);
    }
};

let anotherUser = {};
anotherUser.__proto__ = base;

console.log(anotherUser);
console.log(anotherUser.name);

anotherUser.age = 75;
console.log(anotherUser.age);

for (const key in anotherUser) {
    if (!Object.hasOwn(anotherUser, key)) continue;
    
    const element = anotherUser[key];
    console.log(key, element);
}

console.log(new Set([7, 8, 6]));

console.log(new String('Hello World!'));
String.prototype.firstChar = function() {
    return this[0];
};
console.log('Hello World'.firstChar());

let thirdUser = Object.create({
    name: 'German',
});

console.log(thirdUser);
