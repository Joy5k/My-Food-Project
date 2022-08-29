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
        const createDiv = document.createElement('div')
        createDiv.innerHTML = `
        <div onclick="cardClicked(${meal.idMeal})" class="card-body items-center text-center  border rounded m-6">
                  <img src="${meal.strMealThumb}" alt="Shoes" class="rounded-xl" />
                     <h2 class="card-title">${meal.strIngredient}</h2>
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

const cardClicked=(idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        // .then(data =>console.log(data.meals[0]))
        .then(data =>displayTheFood(data.meals[0]))
}
const displayTheFood = (meal) => {
  
    const foodContainer = document.getElementById('FoodContainer');
    foodContainer.innerHTML = '';
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
        <figure><img src="${meal.strMealThumb}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
        foodContainer.appendChild(createDiv);
}