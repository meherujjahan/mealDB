
const loadSearch = () => {
    const searchInput = document.getElementById('input-field');
    const searchText = searchInput.value;

    searchInput.value = ""; 
    const url = `https://restcountries.eu/rest/v2/name/${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data))

 }
const displaySearchResult = (countries) => {
    const searchResult = document.getElementById('searchResults');

console.log(searchResult);
    countries.forEach(country => {
      console.log(country);
       const div = document.createElement('div');
       div.classList.add('col');
       div.innerHTML= `
       <div class="card h-100">
            <img src="${country.flag}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${country.name}</h5>
            </div>
            <button class="m-4">Learn more</button>
          </div>
       `;
       searchResult.appendChild(div);
       
     });

    }
 