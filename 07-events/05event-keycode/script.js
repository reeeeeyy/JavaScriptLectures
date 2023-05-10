// // https://www.toptal.com/developers/keycode

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  console.log(e.code);
  console.log(e.which);
  document.querySelector("#key1").innerText = e.key;
  document.querySelector("#key2").innerText = e.code;
  document.querySelector("#key3").innerText = e.which;
});

// const keyPress = (e) => {
//   console.log(e.key);
//   const key1 = document.getElementsByClassName("key")[0];
//   key1.innerHTML = `${e.key}`;
// };
// document.addEventListener("keydown", keyPress);

//-----------------------------------------
//another method by sir ryan and classmates
//Method1
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = `
//         <div class="key">
//             ${e.key === ' ' ? 'Space' : e.key}
//             <small>e.key</small>
//         </div>

//         <div class="key">
//             ${e.keyCode}
//             <small>e.key</small>
//         </div>

//         <div class="key">
//             ${e.code}
//             <small>e.code</small>
//         </div>
//       `;
// });

//Method 2
function showKeyCodes(e) {
  const insert = document.getElementById("insert");
  insert.innerHTML = "";

  //im going to create map
  const keyCodes = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  //   console.log(keyCodes);
  for (let key in keyCodes) {
    const div = document.createElement("div");
    div.className = "key";
    const small = document.createElement("small");

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText); //key
    div.appendChild(valueText); //actual value
    div.appendChild(small); //append the small element into the div element

    // the div into the DOM
    insert.appendChild(div);
  }
}

window.addEventListener("keydown", showKeyCodes);
