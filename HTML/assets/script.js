const apiText = document.getElementById('api-text')
const generateButton = document.getElementById('generate-button')
const apiUrl = 'https://v2.jokeapi.dev/joke/Any?safe-mode'


function fetchQuote(){
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    if (data.type === 'single') {
        apiText.innerHTML = data.joke
    } else {
        apiText.innerHTML = data.setup + ' ' + data.delivery
    }
    
  })
  .catch((error) => {
    console.log(error)
    apiText.innerHTML = 'Oops! Something went wrong.'
  });
}

generateButton.addEventListener("click", fetchQuote);

// Fetch initial quote on page load
fetchQuote()

console.log(`User Agent: ${navigator.userAgent}`)

generateButton.addEventListener('click', function () {

  fetch(apiUrl)
  .then(response => response.json ())
  .then((data) => {
    if (data.type === 'single') {
        apiText.innerHTML = data.joke
    } else {
        apiText.innerHTML = data.setup + ' ' + data.delivery
    }
  })
  .catch(error => {
    console.log(error)
    return response.json();
    apiText.innerHTML = 'Oops! Something went wrong.'
  
  })

})



