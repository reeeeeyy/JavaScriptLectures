//######may lumalabas na alert
const clearBtn = document.querySelector("#clear");

// function onClear() {
//     alert("Clear items from function");
//   }

//############################
//clearing them all the fastest way
//method 1
// function onClear() {
//   const itemlist = document.querySelector("ul");
//   itemlist.innerHTML = "";
// }

//method 2
function onClear() {
  const itemlist = document.querySelector("ul");
  const items = document.querySelectorAll("li");

  //using forEach method
  //items.forEach((item) => item.remove());

  //using while method
  //   while (itemlist.firstChild) {
  //     itemlist.removeChild(itemlist.firstChild);
  //   }
}

//######javascript event listener
// clearBtn.onclick = function () {
//   alert("Clear Itemsss");
// };

//###### disadvantage is, using multiple events
//###### addEventListener()
// clearBtn.addEventListener("click", function () {
//   alert("Clear Items");
// });

//###### arrow function to shorten
// clearBtn.addEventListener("click", () => alert("Clear Itemss"));

//named function
clearBtn.addEventListener("click", onClear);

//removeEventListener()
// setTimeout(() => clearBtn.Click(), 5000);

//after 5sec the event listener is now remove, meaning it will not work anymore
// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);
