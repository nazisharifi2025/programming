const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const saveBtn = document.getElementById("Savebtn");
const showingDiv = document.getElementById("Shoing");
const Empiti = document.getElementById("Empiti");

showingDiv.addEventListener("click", () => {
  const film = input1.ariaValueMax.trim();
  const episode = input2.ariaValueMax.trim();
  const imgLink = input3.ariaValueMax.trim();
  if (!film && !episode && !imgLink) {
    Empiti.classList.remove("hidden");
    Empiti.classList.add("flex");
    setInterval(() => {
      Empiti.classList.add("hidden");
      Empiti.classList.remove("flex");
    }, 2000);
    return;
  }

  const inboxdiv = document.createElement("div");
  inboxdiv.classList.add("inboxdiv");
  const h2 = document.createElement("h2");
  h2.classList.add("h2");
  h2.textContent = `فیلم: ${episode || "نامشخص"}`;

  const p = document.createElement("p");
  p.classList.add("mb-1");
  p.textContent = `قسمت: ${episode || "نامشخص"}`;

  inboxdiv.appendChild(h2);
  inboxdiv.appendChild(p);
  if (imgLink) {
    const imgs = document.createElement("img");
    imgs.setAttribute("src", "imgLink");
    imgs.setAttribute("alt", "File-img");
    imgs.classList.add("imgs");
  }
  showingDiv.classList.add("flex");
  showingDiv.classList.remove("hidden");
  showingDiv.appendChild(inboxdiv);
  input1.value = "";
  input2.value = "";
  input3.value = "";
});
