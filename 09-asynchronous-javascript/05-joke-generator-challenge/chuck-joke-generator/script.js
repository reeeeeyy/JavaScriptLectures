//challenge
const getJokeBtn = document.getElementById("joke-btn");
const theJoke = document.getElementById("joke");

function generateJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("Get", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      const joke = response.value;
      theJoke.innerHTML = joke;
    } else {
      theJoke.innerHTML = "error";
    }
  };
  xhr.send();
}

document.addEventListener("DOMContentLoaded", generateJoke);
getJokeBtn.addEventListener("click", generateJoke);
