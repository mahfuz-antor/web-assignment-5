const searchSongs = () => {
    const textSearch = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textSearch}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySongs(data.meals))
}

const displaySongs = songs => {
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML = ''

    songs.forEach(song => {
        // console.log(song)
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3'
        songDiv.innerHTML = `
        <div class="col-md-10">
        <img src="${song.strMealThumb}">
         <h3 class="lyrics-name">${song.strMeal}</h3>
        <p class="author lead">${song.strCategory}</p>
         <div class="col-md-3 text-md-right text-center ">
         <button onclick="getLyric('${song.idMeal}')" class="btn btn-success ">Details</button>
        </div>
        </div>
        `;
        songContainer.appendChild(songDiv);
    })
}

const getLyric = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayLyrics(data.meals[0]));
}

const displayLyrics = meal => {
    const div = document.getElementById('song-lyrics');
    div.innerHTML = `
    <img src="${meal.strMealThumb}">
    <p>${meal.strIngredient1}</p>
    <p>${meal.strIngredient2}</p>
    <p>${meal.strIngredient3}</p>
    <p>${meal.strIngredient4}</p>
    <p>${meal.strIngredient5}</p>
    <p>${meal.strIngredient6}</p>
    `;
    div.appendChild(meal);
}
