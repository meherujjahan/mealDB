document.getElementById('error-message').classList.add('d-none');
document.getElementById('spinner').classList.add('d-none');

const searchFood = () => {
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    searchFiled.value = '';
    document.getElementById('spinner').classList.remove('d-none');
        document.getElementById('spinner').classList.add('d-block');
console.log(searchText);
    if (searchText == "") {
        
        document.getElementById('error-message').classList.remove('d-none');
        document.getElementById('error-message').classList.add('d-block');
    }
    else{
        document.getElementById('error-message').classList.remove('d-block');
        document.getElementById('error-message').classList.add('d-none');
        
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>  displaySearchResult(data.meals))
    // displayError();
}
// const displayError = () => {
//     document.getElementById('error-message').style.display = 'block';
// }

}

    const displaySearchResult = (meals) =>{
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    document.getElementById('spinner').classList.remove('d-block');
        document.getElementById('spinner').classList.add('d-none');
    meals.forEach(meal => {
       
        const div = document.createElement('div');
        div.classList.add('col');
         div.innerHTML = `
         <div onclick ="loadDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
         `;
         searchResult.appendChild(div);
        
    });
}

const loadDetails = (idMeal) => {
const url2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
fetch(url2)
.then(res => res.json())
.then(data => displaymealDetails(data.meals[0]))
}

const displaymealDetails = meal=>{
    window.scrollTo(0, 20)
const mealDetails = document.getElementById('meal-details');
mealDetails.textContent = '';
const div2 = document.createElement('div');
div2.classList.add('card');
div2.innerHTML = `
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
</div>
`;
mealDetails.appendChild(div2);
}