//Add Item #####################
const form = document.querySelector("#item-form");
form.addEventListener("submit", addItem); //submit event listener

function addItem(e) {
  e.preventDefault(); // Prevent the form from submitting

  const input = document.querySelector("#item-input");
  const newItem = input.value.trim(); //input element and its value

  if (newItem !== "") {
    // Check if the input is not empty
    const li = document.createElement("li");
    li.textContent = newItem;

    // Create a button element to remove the item
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-item btn-link text-red";
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    li.appendChild(removeBtn);

    // Add the new li element to the list
    const itemList = document.querySelector("#item-list");
    itemList.appendChild(li);

    input.value = ""; //clear
  }
  // let items = [];
  // if (localStorage.getItem("items")) {
  //   items = JSON.parse(localStorage.getItem("items"));
  // }
  // items.push(newItem);
  // localStorage.setItem("items", JSON.stringify(items));
}

//Delete Item #################
// const deleteItem = (e) => {
//   const li = e.target.closest("li");
//   li.remove();
// };
// const itemUl = document.querySelector("ul");
// itemUl.addEventListener("click", deleteItem);

//Delete Item #################
function removeItem(e) {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
  }
}
document.getElementById("item-list").addEventListener("click", removeItem);

//Clear All ###############
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearAll); //click event listner button para sa clr all

function clearAll() {
  const itemList = document.querySelector("#item-list"); //list element
  itemList.innerHTML = ""; //para maremove lahat ng li sa list
}

// Filter Item ###############
const filterInput = document.querySelector("#filter");
filterInput.addEventListener("input", filterItems);

function filterItems() {
  const filterText = filterInput.value.toLowerCase();
  const items = document.querySelectorAll(".items li");

  items.forEach((item) => {
    const itemText = item.textContent.toLowerCase();
    if (itemText.includes(filterText)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
