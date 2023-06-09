// https://www.toptal.com/developers/keycode/table-of-all-keycodes

// keyCode - key press, key up, key down

//#############################################
const itemInput = document.getElementById("item-input");
const onKeyPress = (e) => {
  //   console.log("keypress");
};
itemInput.addEventListener("keypress", onKeyPress);
//#############################################
const onKeyUp = (e) => {
  //   console.log("key up");
};
itemInput.addEventListener("keyup", onKeyUp);
//#############################################
// const onKeyDown = (e) => {
//   console.log("key down");
// };
// itemInput.addEventListener("keydown", onKeyDown);

//#############################################
const onKeyDown = (e) => {
  //key
  console.log("e.key");
  document.querySelector("h1").innerText = e.key;
};
itemInput.addEventListener("keydown", onKeyDown);

//#############################################
//test for a certain key, if I press enter, there should be an alert stating that I pressed Enter Key
// const onKeyDown = (e) => {
//   //key
//   if (e.key === "Enter") {
//     alert("You pressed the enter key");
//   }
// };
// itemInput.addEventListener("keydown", onKeyDown);
//#############################################

//using keycode
// const onKeyDown = (e) => {
//   //keycode
//   // https://www.toptal.com/developers/keycode/table
//   if (e.keyCode === 13) {
//     alert("You pressed the enter key");
//   }
// };
// itemInput.addEventListener("keydown", onKeyDown);

//#############################################
// const onKeyDown = (e) => {
//   //keycode

//   if (e.keyCode === 13) {
//     alert("You pressed the enter key");
//   }
//   if (e.keyCode === "Digit1") {
//     console.log("You Pressed 1");
//   }
// };
// itemInput.addEventListener("keydown", onKeyDown);

//#############################################
//repeat property
// const onKeyDown = (e) => {
//   //keycode

//   if (e.keyCode === 13) {
//     alert("You pressed the enter key");
//   }
//   if (e.keyCode === "Digit1") {
//     console.log("You Pressed 1");
//   }

//   //repeat
//   if (e.repeat) {
//     console.log("You are holding down " + e.key);
//   }
//   //   console.log("Shift " + e.shiftKey);
//   //   console.log("Control " + e.ctrlKey);
//   //   console.log("Alt " + e.altKey);

//   //key plus shift
//   if (e.shiftKey && e.key === "Q") {
//     console.log("You hit shift + Q");
//   }
// };
itemInput.addEventListener("keydown", onKeyDown);
//#############################################
