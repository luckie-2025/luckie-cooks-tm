// =====================================
// LUCKIE COOKS ™ JAVASCRIPT
// =====================================


// welcome button message

function showMessage() {

  alert(
    "Welcome to Luckie Cooks ™ 🍳\n\nTiny kitchen. Huge dreams."
  );

}


// =====================================
// greeting based on time
// =====================================

const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {

  greeting = "☀ Good Morning, Chef!";

}

else if (hour < 18) {

  greeting = "🌿 Good Afternoon, Chef!";

}

else {

  greeting = "🌙 Late night cooking again?";
}


// creates greeting text on page

const greetingText = document.createElement("p");

greetingText.innerText = greeting;

greetingText.style.textAlign = "center";

greetingText.style.fontSize = "20px";

greetingText.style.color = "#d4af37";

document.body.prepend(greetingText);


// =====================================
// recipe card hover sound effect idea
// (future feature placeholder)
// =====================================

console.log(
  "Luckie Cooks ™ loaded successfully 🍵"
);


// =====================================
// random cooking quotes
// =====================================

const quotes = [

  "tiny kitchen. huge dreams.",

  "bismillah before every recipe 🌙",

  "chaotic cooking = best cooking",

  "blueberries were harmed in this experiment",

  "study snack engineering in progress"

];


// pick random quote

const randomQuote =
  quotes[Math.floor(Math.random() * quotes.length)];

console.log(randomQuote);