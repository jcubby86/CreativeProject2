
function loadQuote(json){
  document.getElementById("background-image").src = 'https://picsum.photos/800/500';
  document.getElementById("quote").innerText = json.content;
  document.getElementById("author").innerText = json.author;
}

function callApi(event){
  event.preventDefault();

  const url = "https://api.quotable.io/random";    
  fetch(url)
    .then(function (response) {
      return response.json();
    }).then(function (json) {
      loadQuote(json);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
  callApi(event);
  document.getElementById("generate").addEventListener("click", callApi);
});

