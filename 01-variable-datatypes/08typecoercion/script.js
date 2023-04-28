let x;

// coerced to string
x = 5 + "5";
x = 5 + Number("5");

// Coerced to a number; multiple number to a string
x = 5 * "5";

//null is coerced to 0 as it is falsy values
x = 5 + null;

x = Number(null);
x = Number(true);
x = Number(false);

//true is coerced to a 1
x = 5 + true;

//false is coerced t ia 0 (Falsy)
x = 5 + false;

//undefined is coerced to 0 (but the answer is NaN or Not a Number)
x = 5 + undefined;

console.log(x, typeof x);
