// 🧠 AI COOK MODE - WORKING CORE ENGINE

function generateRecipe() {
  const input = document.getElementById("ai-input").value;
  const output = document.getElementById("ai-output");

  console.log("Button clicked:", input);

  // ⚠️ empty check
  if (!input.trim()) {
    output.innerHTML = "⚠️ Please enter ingredients first.";
    return;
  }

  // 🍳 convert input into ingredients list
  const ingredients = input
    .toLowerCase()
    .split(/,|\n/)
    .map(i => i.trim());

  // 🧠 simple AI logic
  const hasEgg = ingredients.includes("egg");
  const hasRice = ingredients.includes("rice");
  const hasBread = ingredients.includes("bread");
  const hasOnion = ingredients.includes("onion");
  const hasBlueberry = ingredients.includes("blueberry");

  let recipe = {
    name: "",
    time: "",
    difficulty: "",
    steps: [],
    tip: ""
  };

  // 🍛 RULE ENGINE

  if (hasEgg && hasRice) {
    recipe.name = "Egg Fried Rice";
    recipe.time = "15 mins";
    recipe.difficulty = "Easy";
    recipe.steps = [
      "Heat oil in pan",
      "Add onion and sauté",
      "Add egg and scramble",
      "Add rice and mix well",
      "Season and serve"
    ];
    recipe.tip = "Add soy sauce for extra flavour 🔥";
  }

  else if (hasEgg && hasBread) {
    recipe.name = "Golden Egg Toast";
    recipe.time = "10 mins";
    recipe.difficulty = "Easy";
    recipe.steps = [
      "Beat egg with salt",
      "Dip bread into egg mix",
      "Fry until golden",
      "Serve hot"
    ];
    recipe.tip = "Crispy edges = best taste 😋";
  }

  else if (hasBlueberry) {
    recipe.name = "Blueberry Honey Drink";
    recipe.time = "5 mins";
    recipe.difficulty = "Easy";
    recipe.steps = [
      "Mash blueberries",
      "Add cold water",
      "Mix honey",
      "Stir well",
      "Serve chilled"
    ];
    recipe.tip = "Strain for smoother texture"
  }

  else {
    recipe.name = "Mystery Bowl";
    recipe.time = "10–20 mins";
    recipe.difficulty = "Flexible";
    recipe.steps = [
      "Heat oil or butter",
      "Add ingredients",
      "Cook until soft",
      "Season to taste",
      "Serve creatively"
    ];
    recipe.tip = "Experiment = best cooking style 🧠"
  }

  // 📦 OUTPUT RENDER
  output.innerHTML = `
    <h3>🍛 ${recipe.name}</h3>
    <p>⏱ Time: ${recipe.time}</p>
    <p>⚡ Difficulty: ${recipe.difficulty}</p>

    <h4>👨‍🍳 Steps:</h4>
    <ol>
      ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
    </ol>

    <p>💡 Tip: ${recipe.tip}</p>
  `;
}
