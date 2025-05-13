// const btn = document.getElementById("Savebtn");
// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// const input3 = document.getElementById("input3");
// const shoing = document.getElementById("shoing");
// btn.addEventListener("click",()=>{

// })
const btn = document.getElementById("Savebtn");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const shoing = document.getElementById("shoing");

btn.addEventListener("click", () => {
  const val1 = input1.value;
  const val2 = input2.value;
  const val3 = input3.value; // آدرس عکس

  // ساختن HTML برای نمایش داده‌ها
  shoing.innerHTML = `
    <p>نام: ${val1}</p>
    <p>توضیح: ${val2}</p>
    <img src="${val3}" alt="عکس وارد شده" style="max-width: 300px; height: auto;">
  `;
});
