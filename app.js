const app = document.getElementById("app");
const search = document.getElementById("search");

function render(list = episodes) {
  app.innerHTML = "";

  list.forEach(e => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${e.title}</h3>
      <p>${e.desc}</p>
    `;
    app.appendChild(div);
  });
}

function showAll() {
  render(episodes);
}

function showSaved() {
  app.innerHTML = "<p>Saved feature coming next upgrade 🌙</p>";
}

function showCook() {
  app.innerHTML = "<p>Cook Mode coming next upgrade 🍳</p>";
}

search.addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  render(episodes.filter(x =>
    x.title.toLowerCase().includes(q) ||
    x.desc.toLowerCase().includes(q)
  ));
});

render();
