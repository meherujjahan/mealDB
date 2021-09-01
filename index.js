const searchFood = async () => {
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    searchFiled.value = '';
    if (searchText == "") {
        //ikdjfoier
    }
    else{
       
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    try{ const res = await fetch(url);
        const data = await res.json();
        displaySearchResult(data.meals);}
        
        catch(error) {
console.log(error);
        }
    
    // fetch(url)
    // .then(res => res.json())
    // .then(data =>  displaySearchResult(data.meals))
    }
    
}
 

    const displaySearchResult = (meals) =>{
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    if (meals.length == 0){
        // write anything
    }
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

const loadDetails = async (idMeal) => {
const url2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

const res = await fetch(url2);
const data = await res.json();
displaymealDetails(data.meals[0]);
// fetch(url2)
// .then(res => res.json())
// .then(data => displaymealDetails(data.meals[0]))
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