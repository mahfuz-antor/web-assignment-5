const searchFoods = () => {
    const textSearch = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textSearch}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
}

const displayFoods = Foods => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = ''

    Foods.forEach(food => {
        // console.log(food)
        const foodDiv = document.createElement('div');
        foodDiv.className = 'extra-part single-result'
        foodDiv.innerHTML = `
        <div onclick="getLyric('${food.idMeal}')" class=" col-md-10">
        <img src="${food.strMealThumb}">
         <h1 class="element-name">${food.strMeal}</h1>
        <p class="author lead">${food.strCategory}</p>
         <div class="col-md-3 text-md-right text-center ">
        </div>
        </div>
        `;
        foodContainer.appendChild(foodDiv);
    })
}

const getLyric = element => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${element}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayElement(data.meals[0]));
}

const displayElement = meal => {
    const div = document.getElementById('food-element');
    div.innerHTML = `
    <img src="${meal.strMealThumb}">
    <p>&#9758 ${meal.strIngredient1}</p>
    <p>&#9758 ${meal.strIngredient2}</p>
    <p>&#9758 ${meal.strIngredient3}</p>
    <p>&#9758 ${meal.strIngredient4}</p>
    <p>&#9758 ${meal.strIngredient5}</p>
    <p>&#9758 ${meal.strIngredient6}</p>
    <p>&#9758 ${meal.strIngredient7}</p>
    `;
    div.appendChild(meal);
}
