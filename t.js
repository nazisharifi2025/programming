const body = document.body;
const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent = "in the name of allah";
div.style.background = "red";
div.classList.add("text-white");
div.classList.add("h-screen");
div.classList.add("w-full");
div.classList.add("text-4xl");
body.appendChild(div);
div.appendChild(h1);
