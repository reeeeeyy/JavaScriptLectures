const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelector("li");

// //###############
// //testing lang kung gumagana
// function run() {
//     console.log(2);
// //###############
// }

function run() {
  //classname
  console.log(itemList.className);

  //changing the classes with className
  //   text.className = "dark"; (a)

  //(a)the problem is, its overwrites the original class
  //how to fix
  //   text.className = "dark card";
  //#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#
  //DOM TOKEN LIST
  //   console.log(itemList.classList);

  itemList.classList.forEach((c) => console.log(c));

  //   text.classList.add("dark");
  //   text.classList.remove("card");
  //   text.classList.toggle("dark");
  //   text.classList.toggle("hidden");
  //   text.classList.replace("card", "dark");

  //Changer Style = style property
  //   itemList.style.lineHeight = "3";

  items.forEach((item, index) => {
    item.style.color = "red";
    if (index == 2) {
      item.style.color = "blue";
    }
  });
}

document.querySelector("button").onclick = run;
