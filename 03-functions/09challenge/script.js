//challenge1
const getCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// const createObj = () => ({
//     name: "Ryan",
//   });
//challenge2
const minMax = (numbers) => {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
};
console.log(minMax([1, 2, 3, 4, 5]));

//challenge3
(function (length, width) {
  const area = length * width;
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`
  );
})(10, 5);
