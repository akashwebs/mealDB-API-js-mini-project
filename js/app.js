// preloading for serach result
const loadResult = () => {
    document.getElementById('loading').style.display = 'none';
}

const searchFood = async() => {
    const srachFood = document.getElementById('serach-value');
    const srachName = srachFood.value;

    srachFood.value = ''
    if (srachName == '') {
        alert('please enter any food name')
    } else {

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${srachName}`
        const res = await fetch(url)
        const data = await res.json()
        displayResult(data.meals)
    }


}

const displayResult = meals => {


    if (meals == null) {
        alert('result not found')
    } else {

        const seeDatils = document.getElementById('food-details')
        seeDatils.innerHTML = ''

        const serachResult = document.getElementById('serach-result');
        serachResult.innerHTML = ''
        meals.forEach(meal => {
            // console.log(meal)
            const mealId = meal.idMeal;
            const div = document.createElement('div');
            div.innerHTML = `
                    <div onclick='detailsFood(${mealId})' class="card">
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
}

const detailsFood = async meal => {
    const serachResult = document.getElementById('serach-result');
    serachResult.innerHTML = ''

    const mealId = meal;
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

    const res = await fetch(url);
    const data = await res.json();
    seeDatils(data);

}

const seeDatils = data => {

    const seeDatils = document.getElementById('food-details')
    seeDatils.innerHTML = ''


    const meal = data.meals[0];
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions}</p>
                    <a href="${meal.strYoutube}" class="btn btn-primary">See Video</a>
                </div>
                `
    seeDatils.appendChild(div);
}