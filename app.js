const app = document.getElementById("app");
const search = document.getElementById("search");

const episodes = [
  {
    id: 1,
    title: "Episode 1",
    desc: "Sweet basics & honey toast"
  },
  {
    id: 2,
    title: "Episode 2",
    desc: "Blueberry drinks & mash flow"
  },
  {
    id: 3,
    title: "Episode 3",
    desc: "Knife skills & sauces"
  }
];

// 🍽️ Render function
function render(list) {
  app.innerHTML = "";

  if (list.length === 0) {
    app.innerHTML = "<p style='text-align:center;'>No results found 🌙</p>";
    return;
  }

  list.forEach(ep => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${ep.title}</h3>
      <p>${ep.desc}</p>
    `;

    app.appendChild(card);
  });
}

// 🚀 initial load
render(episodes);

// 🔍 search system
search.addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();

  const filtered = episodes.filter(ep =>
    ep.title.toLowerCase().includes(q) ||
    ep.desc.toLowerCase().includes(q)
  );

  render(filtered);
});

// 🧭 nav helpers (used by buttons in HTML)
function showAll() {
  render(episodes);
}

function showSaved() {
  app.innerHTML = "<p style='text-align:center;'>Saved feature coming soon ❤️</p>";
}

function showCook() {
  app.innerHTML = "<p style='text-align:center;'>Cook Mode coming soon 🍳</p>";
}
