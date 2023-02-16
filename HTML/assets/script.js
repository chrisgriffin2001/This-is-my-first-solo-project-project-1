
function fetchQuote(){
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    apiText.innerHTML = data.text;
  })
  .catch(error => {
    console.error("Error fetching data from API:", error);
  });
}

generateButton.addEventListener("click", fetchQuote);

// Fetch initial quote on page load
fetchQuote();



  console.log(`User Agent: ${navigator.userAgent}`);

  fetch(apiUrl)
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    apiText.innerHTML = data.text;
  })
  .catch(error => {
    console.error("Error fetching data from API:", error);

  });
  const apiText = document.getElementById("api-text");
  const generateButton = document.getElementById("generate-button");
  const apiUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode";
  
  generateButton.addEventListener("click", function() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.type === "single") {
          apiText.innerHTML = data.joke;
        } else {
          apiText.innerHTML = data.setup + " " + data.delivery;
        }
      })
      .catch(error => {
        console.log(error);
        apiText.innerHTML = "Oops! Something went wrong.";
      });
  });
  


