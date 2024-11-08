document.getElementById("submit").addEventListener("click", (event) => {
  const searchItem = document.getElementById("Search-text").value;

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
    .then((res) => res.json())
    .then((data) => showAllItem(data.meals))
    .catch((error) => console.log("fetch error"));
});

const showAllItem = (products) => {
  const container = document.getElementById("all-meal");
  container.innerHTML = "";

  if (!products) {
    container.innerHTML = "<h1 class = 'text-center'>No products found!</h1>";
    return;
  }

  products.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("col-md-3", "col-12", "d-flex", "text-center", "mt-4");

    div.innerHTML = `
      <div class="card" style="width: 25rem" onclick = "singleProduct('${element.idMeal}')">
        <img src="${element.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h1 class="card-title">${element.strMeal}</h1>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
};

const singleProduct = (FoodId) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${FoodId}`)
    .then((res) => res.json())
    .then((data) => showDeatils(data.meals[0]))
    .catch((error) => console.log("fetch error"));
};

const showDeatils = (element) => {
  const container = document.getElementById("meal-deatils");
  container.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("col-xs-12");
  div.innerHTML = `
    <div class="card p-2 h-100" style="width: 25rem">
        <img src="${element.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h2 class="card-title">${element.strMeal}</h2>
          <h4> Ingredients </h4>
          <ul>
            <li>${element.strIngredient1}</li>
            <li>${element.strIngredient2}</li>
            <li>${element.strIngredient3}</li>
            <li>${element.strIngredient4}</li>
            <li>${element.strIngredient5}</li>
            <li>${element.strIngredient6}</li>
            <li>${element.strIngredient7}</li>
            <li>${element.strIngredient8}</li>
          </ul>
        </div>
    </div>
  `;
  container.appendChild(div);
};
