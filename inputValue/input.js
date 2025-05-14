// const btn = document.getElementById("Savebtn");
// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// const input3 = document.getElementById("input3");
// const shoing = document.getElementById("shoing");
// btn.addEventListener("click",()=>{

// })
// const btn = document.getElementById("Savebtn");
// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// const input3 = document.getElementById("input3");
// const shoing = document.getElementById("shoing");
//
// btn.addEventListener("click", () => {
// const val1 = input1.value;
// const val2 = input2.value;
// const val3 = input3.value; // آدرس عکس
//
// ساختن HTML برای نمایش داده‌ها
// shoing.innerHTML = `
// <p>نام: ${val1}</p>
// <p>توضیح: ${val2}</p>
// <img src="${val3}" alt="عکس وارد شده" style="max-width: 300px; height: auto;">
// `;
// });
// گرفتن عناصر HTML
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const saveBtn = document.getElementById("Savebtn");
const showingDiv = document.getElementById("Shoing");

// اضافه کردن Event به دکمه Save
saveBtn.addEventListener("click", () => {
  // گرفتن مقادیر از inputها
  const film = input1.value.trim();
  const episode = input2.value.trim();
  const imgLink = input3.value.trim();

  // بررسی خالی نبودن
  if (!film && !episode && !imgLink) {
    alert("لطفاً حداقل یک فیلد را پر کنید.");
    return;
  }

  // ساختن div جدید با اطلاعات
  const infoBox = document.createElement("div");
  infoBox.className = "bg-white text-black p-4 rounded-md shadow-md my-4";

  infoBox.innerHTML = `
    <h2 class="font-bold text-xl mb-2">فیلم: ${film || "نامشخص"}</h2>
    <p class="mb-1">قسمت: ${episode || "نامشخص"}</p>
    ${
      imgLink
        ? `<img src="${imgLink}" alt="Image" class="w-[200px] h-auto mt-2 rounded-md" />`
        : ""
    }
  `;

  // نمایش div اصلی و افزودن اطلاعات
  showingDiv.classList.remove("hidden");
  showingDiv.appendChild(infoBox);

  // پاک کردن input ها
  input1.value = "";
  input2.value = "";
  input3.value = "";
});
