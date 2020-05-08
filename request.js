const fetch = require("node-fetch")


//example 1: simple API fetch (from https://www.freecodecamp.org/news/understanding-the-fetch-api-a7d4c08c2a7/)

fetch('http://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(body=>console.log(body))


//example 2: API fetch with error catches

fetch('http://dog.ceo/api/breeds/image/random').then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message)
}).then(jsonResponse => {
  console.log(jsonResponse)
})


// API fetch that uses a word input as query parameter

const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {
    renderResponse(jsonResponse);
  })
}


