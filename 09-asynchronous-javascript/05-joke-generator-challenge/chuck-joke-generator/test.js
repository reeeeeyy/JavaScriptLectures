// // Get the button and joke element
// const button = document.getElementById("joke-btn");
// const jokeElement = document.getElementById("joke");

// // Function to generate a new joke
// function generateJoke() {
//   // Create a new XMLHttpRequest object
//   const xhr = new XMLHttpRequest();

//   // Set the API endpoint and method
//   const url = "https://api.chucknorris.io/jokes/random";
//   const method = "GET";

//   // Open the request
//   xhr.open(method, url);

//   // Set the onload function
//   xhr.onload = function () {
//     // Check for a successful status code
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // Parse the JSON response
//       const response = JSON.parse(xhr.responseText);

//       // Get the joke from the response
//       const joke = response.value;

//       // Display the joke in the joke element
//       jokeElement.innerHTML = joke;
//     } else {
//       // Display an error message if the request fails
//       jokeElement.innerHTML = "Oops! Something went wrong.";
//     }
//   };

//   // Send the request
//   xhr.send();
// }

// // Call the generateJoke function when the page loads
// document.addEventListener("DOMContentLoaded", generateJoke);

// // Add an event listener to the button
// button.addEventListener("click", generateJoke);
