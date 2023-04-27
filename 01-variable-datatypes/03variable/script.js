// ways to declare variable
// var, let & const

let firstName = "Juan";
const lastName = "Cruz";
console.log(firstName, lastName);

let age = 30;
console.log(age);

// naming conventions
// Only letters, number, underscores and dollar signs
// cant start with a number

// multi-word formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

//With let. we can declare a value w/o assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

//we cannot reassign value to const
//x = 200 | const = constant, di pwede mapalitan ng value

console.log(x);

const arr = [1, 2, 3, 4];
console.log(arr);
// arr = [1, 2, 3, 4, 5];
// we can manipulate ARRAYS and OBJECTS using const
arr.push(5);
console.log(arr);

const person = {
  name: "Rey",
};
person.name = "Ald";
person.email = "rey@gmail.com";
console.log(person);

//Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;
console.log(f);
console.log(e);
console.log(d);
