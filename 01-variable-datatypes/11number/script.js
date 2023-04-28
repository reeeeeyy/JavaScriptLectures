let x;

const num = new Number(74.321);

//tostring() - returns a string representation of a number
x = num.toString();

// to get the length
x = num.toString().length;

//decimal point
x = num.toFixed(2);

//returns with the specified length
x = num.toPrecision(3);

//toExponential() - convert a number to exponential notation and return its value as string
x = num.toExponential(2);

//toLocalString() - returns a string represantaion of the number, using the current locale
x = num.toLocaleString("en-Us");

//valueof - get value
x = num.valueOf();

console.log(x);
