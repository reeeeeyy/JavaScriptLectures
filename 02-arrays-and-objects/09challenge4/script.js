const library = [
  {
    title: "Book 1",
    author: "Author 1",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: "Book 2",
    author: "Author 2",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: "Book 3",
    author: "Author 3",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
];
const book1 = library[0];
const book2 = library[1];
const book3 = library[2];

console.log(library);

// Step 2
//setting the value of read into true using dot notation
library.read = true;

//Step 3
//destructuring title [0] into firstBook
const [{ title: firstBook, author, status }, ...rest] = library;
// console.log(firstBook, author, status);
// console.log([, , { title, author }]);
// console.log(book1);
// console.log(book2);
// console.log(book3);

// Step 4 Object into JSON
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
// console.log(library[0].firstBook);
// let [{ title, author }] = library;
// console.log(library);
// console.log(title);

//to display the title of the first object only
// console.log(library[0].title);
