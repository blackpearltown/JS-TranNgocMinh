let num1 = 10;

const num2 = num1;

num1 = 20;

console.log(num1);
console.log(num2);

const person = {
    name: 'Teo',
    age: 9
};

const person2 = person;

const person3 ={
    ...person,
}

person.name = 'Ti';
person.age = 30;

console.log(person);
console.log(person2);
console.log(person3);