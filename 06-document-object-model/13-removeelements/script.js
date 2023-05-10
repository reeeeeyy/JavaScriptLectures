//remove - is called on the element you want to remove
//remove chile - called on the parent element and pass the item you want to remove

// function removeClearButton() {
//   const clearBtn = document.querySelector("#clear");
//   clearBtn.remove();
// }
// removeClearButton();

// //REMOVE CHILD METHOD
// //removechild()
// function removeFirstItem() {
//   const ul = document.querySelector("ul");
//   const li = document.querySelector("li:first-child");
//   ul.removeChild(li);
// }
// removeFirstItem();

//####################################
// function removeItem(itemNumber) {
//   const ul = document.querySelector("ul");
//   const li = document.querySelector(`li:nth-child(${itemNumber})`);

//   ul.removeChild(li);
// }

// removeItem(2);
// removeItem(3);
//####################################

// function removeItem2(itemNumber) {
//   const ul = document.querySelector("ul");
//   const li = document.querySelector("li")[itemNumber - 1];

//   ul.removeChild(li);
// }

// // removeItem2(1);
// removeItem2(3);

//####################################
// function removeItem3(itemNumber) {
//   const li = document.querySelector("li");
//   li[itemNumber - 1].remove();
// }
// removeItem3(4);

//####################################

const removeItem4 = (itemNumber) =>
  document.querySelectorAll("li")[itemNumber - 1].remove();
removeItem4(2);
//####################################
//####################################
//####################################
//####################################
