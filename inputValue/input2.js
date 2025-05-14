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
  }
});
