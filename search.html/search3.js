const search = document.getElementById("search");
const input = document.getElementById("input");
const shoingdiv = document.getElementById("shoingdiv");
search.addEventListener("click", () => {
  input.classList.remove("hidden");
  search.classList.add("opacity-0");
});
// input ended
const arrey = [
  {
    name: "بلندی های بادگیر",
    gener: "درام",
    Image: "../poblic/20653.jpg",
  },
  {
    name: "طالار گرگ",
    gener: "درام",
    Image: "../poblic/22447.jpg",
  },
  {
    name: "بادبدگ باز",
    gener: "درام",
    Image: "../poblic/3858.jpg",
  },
  {
    name: "تس دور برویل",
    gener: "درام",
    Image: "../poblic/48663.jpg",
  },
  {
    name: "سالار مگس ها",
    gener: "درام",
    Image: "../poblic/63545.jpg",
  },
  {
    name: "اشتباه در ستاره های بخت ما",
    gener: "درام",
    Image: "../poblic/72381.jpg",
  },
  {
    name: "غرور و تغصب",
    gener: "درام",
    Image: "../poblic/121311.jpg",
  },
  {
    name: "خواب گران",
    gener: "درام",
    Image: "../poblic/105370.jpg",
  },
];
 input.addEventListener("input",()=>{
    const query = input.value.toLowerCase();
        resultDiv.innerHTML = "";
         const filterd = arrey.filter((sereal)=>
            sereal.name.toLowerCase().includes(query));
         if
 })