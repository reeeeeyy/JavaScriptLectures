// document.querySelector("h1").textContent = "Hello World";
//this will result to an error
//Hello World will not reflect in your live server (index.html)
//#############################################
// how to fix it
// window.onload = function () {
//   document.querySelector("h1").textContent = "Hello World";
// };

// window.onload = function () {
//     document.querySelector("h1").textContent = "Hello World";
// };
//#############################################

//addeventlistener - this does the same this as above code
// window.addEventListener(
//   "load",
//   () => (document.querySelector("h1").textContent = "Hello Worlds")
// );
//#############################################

//DOM Content Loaded

// window.addEventListener("load", () => console.log("Page Loaded"));

// window.addEventListener("DOMContentLoaded", () => console.log("DOM Loaded"));

// console.log("Run Me");

// document.querySelector("h1").textContent = "Hello World 1st";

// the trick in here is change in the index
//<script src="./script.js" defer></script>
//add "defer"

//#############################################
// Resize Event
window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});
//#############################################
//Scroll event
window.addEventListener("scroll", () => {
  //   console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);
  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

//###################################
// Focus and Blur
window.addEventListener("focus", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "blue";
  });
});

window.addEventListener("blur", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "black";
  });
});
//#############################################
//#############################################
