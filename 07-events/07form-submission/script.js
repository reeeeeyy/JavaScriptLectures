//##############################################
const form = document.getElementById("item-form");

// function onSubmit(e) {
//   e.preventDefault();
//   console.log("submit");
// }

// form.addEventListener("submit", onSubmit);
//##############################################
function onSubmit(e) {
  e.preventDefault();
  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;
  console.log(item, priority); //you can use (item, priority.value)
}

form.addEventListener("submit", onSubmit);
//##############################################
//------Validation---------
// function onSubmit(e) {
//   e.preventDefault();

//   const item = document.getElementById("item-input").value;
//   const priority = document.getElementById("priority-input").value;

//   if (item === "" || priority === "0") {
//     alert("Please fill in all fields");
//     return;
//   }

//   console.log(item, priority); //you can use (item, priority.value)
// }

// form.addEventListener("submit", onSubmit);
//##############################################
//-------FormData Object--------
// function onSubmit2(e) {
//   e.preventDefault();

//   const formData = new FormData(form);
//   console.log(formData);
// }
// form.addEventListener("submit", onSubmit2);
//##############################################
//-------------using get method
// function onSubmit2(e) {
//   e.preventDefault();

//   const formData = new FormData(form);

//   //get individual items
//   const item = formData.get("item");
//   const priority = formData.get("priority");
//   console.log(item, priority);
// }
// form.addEventListener("submit", onSubmit2);
//##############################################
//-------------using entries method
// function onSubmit2(e) {
//   e.preventDefault();

//   const formData = new FormData(form);

//   const entries = formData.entries();
//   console.log(entries);
// }
// form.addEventListener("submit", onSubmit2);
//##############################################
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const entries = formData.entries();

  //loop through the entries
  for (let entry of entries) {
    // console.log(entry);
    console.log(entry[1]);
  }
  // console.log(entries);
}
form.addEventListener("submit", onSubmit2);
//##############################################
//##############################################
//##############################################
//##############################################
//##############################################
