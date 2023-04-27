//String
const firstName = "Rey";
// console.log(firstName);

// const output = firstName;
// console.log(output, typeof output);

//Number
const age = 30;
const temp = 98.9;

//Boolean
const hasKids = true;

//Null
const aptNumber = null;

//undefined
// let score;
// console.log(score);

const score = undefined;

//symbol
const id = Symbol("id");

//Bigint
const n = 3141592653589793238n;

//Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  fname: "Rey",
};

function sayHello() {
  console.log("Hello");
}

const output = sayHello;
console.log(output, typeof output);
