const searchFood = () => {

    const srachFood = document.getElementById('serach-value');
    const srachName = srachFood.value;

    srachFood.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${srachName}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.meals))
}

const displayResult = meals => {
    const serachResult = document.getElementById('serach-result');
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,250)}...</p>
            </div>
        </div>
        `
        div.className = 'col'
        serachResult.appendChild(div)
    })
}