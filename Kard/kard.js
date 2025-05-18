const favorite = document.querySelectorAll(".favorite");
const text = document.querySelectorAll(".text");

favorite.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.dataset.liked === "false") {
      item.innerHTML = `<i class="fa-solid fa-heart" style="color:red"></i>`; // قلب پر
      text[index].textContent = "24";
      item.dataset.liked = "true";
    } else {
      item.innerHTML = `
        <span class="material-symbols-outlined" style="font-size: 30px">
          favorite
        </span>`; // قلب خالی
      text[index].textContent = "23";
      item.dataset.liked = "false";
    }
  });
});
