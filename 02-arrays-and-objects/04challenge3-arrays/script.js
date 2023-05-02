//Challenge 3.1
const arr = [1, 2, 3, 4, 5];
arr.reverse();
arr.unshift(6);
arr.push(0);

//result
console.log(arr);

//Challenge 3.2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr1.splice(4, 5);
// console.log(arr1);

//Using concat
const arr3 = arr1.concat(arr2);

//Result of concat
console.log(arr3);

//Using ... spread
const arr4 = [...arr1, ...arr2];

//Result of ...spread
console.log(arr4);

//Using slice
const arr5 = arr1.slice(0, 4).concat(arr2);

//Result of slice
console.log(arr5);
