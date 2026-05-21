const recipes = [
  { name: "Egg Fried Rice", ingredients: "egg, rice, onion" },
  { name: "Blueberry Drink", ingredients: "blueberry, honey, water" },
  { name: "Simple Omelette", ingredients: "egg, salt, onion" }
];

function searchRecipes() {
  const query = document.getElementById("search").value.toLowerCase();
  const results = recipes.filter(r =>
    r.name.toLowerCase().includes(query) ||
    r.ingredients.includes(query)
  );

  displayRecipes(results);
}

function displayRecipes(list) {
  const container = document.getElementById("recipes");
  container.innerHTML = "";

  list.forEach(r => {
    container.innerHTML += `
      <div class="card">
        <h3>${r.name}</h3>
        <p>${r.ingredients}</p>
      </div>
    `;
  });
}
