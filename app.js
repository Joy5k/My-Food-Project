const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data=>displayMeals(data.meals))
    
}
const displayMeals = (meals) => {
    const displayInCard = document.getElementById('meal-container');
    displayInCard.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
        const createDiv = document.createElement('div')
        createDiv.innerHTML = `
        <div class="card-body items-center text-center  border rounded m-6">
          
                  <img src="${meal.strMealThumb}" alt="Shoes" class="rounded-xl" />
                
                
                  <h2 class="card-title">${meal.strIngredient1}</h2>
                  <p>${meal.strInstructions.slice(0, 250)}</p>
                </div>
        `
        displayInCard.appendChild(createDiv)
        
    });
}
const searchFood = () => {
    console.log('hello world');
    const getSearchField = document.getElementById('search-text');
    const searchText = getSearchField.value;
    loadMeals(searchText);
}

loadMeals('fish');