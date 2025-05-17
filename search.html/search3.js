const search = document.getElementById("search");
const input = document.getElementById("input");
const shoingdiv = document.getElementById("shoingdiv");
const times = document.getElementById("times");

search.addEventListener("click", () => {
  input.classList.remove("hidden");
  search.classList.add("opacity-0");
  times.classList.remove("opacity-0");
});
times.addEventListener("click", () => {
  input.classList.add("hidden");
  search.classList.remove("opacity-0");
  times.classList.add("opacity-0");
});

const arrey = [
  {
    name: "بلندی های بادگیر",
    gener: "زیبا",
    Image: "../poblic/20653.jpg",
  },
  {
    name: "طالار گرگ",
    gener: "دل نشین",
    Image: "../poblic/22447.jpg",
  },
  {
    name: "بادبدگ باز",
    gener: "زیبا",
    Image: "../poblic/3858.jpg",
  },
  {
    name: "تس دور برویل",
    gener: "محبوب",
    Image: "../poblic/48663.jpg",
  },
  {
    name: "سالار مگس ها",
    gener: "زیبا",
    Image: "../poblic/63545.jpg",
  },
  {
    name: "اشتباه در ستاره های بخت ما",
    gener: "زیبا",
    Image: "../poblic/72381.jpg",
  },
  {
    name: "غرور و تغصب",
    gener: "دل نشین",
    Image: "../poblic/121311.jpg",
  },
  {
    name: "خواب گران",
    gener: "زیبایی",
    Image: "../poblic/105370.jpg",
  },
];

input.addEventListener("input", () => {
  const query = input.value.toLowerCase().trim();
  shoingdiv.innerHTML = "";

  if (query === "") {
    shoingdiv.classList.add("hidden");
    return;
  }

  shoingdiv.classList.remove("hidden");

  const filterd = arrey.filter((sereal) =>
    sereal.name.toLowerCase().includes(query)
  );

  if (filterd.length === 0) {
    shoingdiv.innerHTML = "<p class='p-4'>سریالی دریافت نشد</p>";
  } else {
    filterd.forEach((sereal) => {
      const div = document.createElement("div");
      const strong = document.createElement("strong");
      const p1 = document.createElement("p");
      const img = document.createElement("img");

      div.classList.add(
        "p-4",
        "border-b",
        "border-gray-300",
        "flex",
        "justify-end",
        "items-center"
      );

      strong.textContent = sereal.name;
      p1.textContent = "کتاب: " + sereal.gener;
      img.src = sereal.Image;
      img.alt = sereal.name;
      img.classList.add("w-14", "h-auto", "my-2");

      div.appendChild(strong);
      div.appendChild(p1);
      div.appendChild(img);
      shoingdiv.appendChild(div);
    });
  }
});

//  const search = document.getElementById("search");
// const input = document.getElementById("input");
// const shoingdiv = document.getElementById("shoingdiv");
// search.addEventListener("click", () => {
//   input.classList.remove("hidden");
//   search.classList.add("opacity-0");
// });
// // input ended
// const arrey = [
//   {
//     name: "بلندی های بادگیر",
//     gener: "درام",
//     Image: "../poblic/20653.jpg",
//   },
//   {
//     name: "طالار گرگ",
//     gener: "درام",
//     Image: "../poblic/22447.jpg",
//   },
//   {
//     name: "بادبدگ باز",
//     gener: "درام",
//     Image: "../poblic/3858.jpg",
//   },
//   {
//     name: "تس دور برویل",
//     gener: "درام",
//     Image: "../poblic/48663.jpg",
//   },
//   {
//     name: "سالار مگس ها",
//     gener: "درام",
//     Image: "../poblic/63545.jpg",
//   },
//   {
//     name: "اشتباه در ستاره های بخت ما",
//     gener: "درام",
//     Image: "../poblic/72381.jpg",
//   },
//   {
//     name: "غرور و تغصب",
//     gener: "درام",
//     Image: "../poblic/121311.jpg",
//   },
//   {
//     name: "خواب گران",
//     gener: "درام",
//     Image: "../poblic/105370.jpg",
//   },
// ];
// input.addEventListener("input", () => {
//   const query = input.value.toLowerCase();
//   shoingdiv.innerHTML = "";
//   shoingdiv.classList.remove("hidden");
//   const filterd = arrey.filter((sereal) =>
//     sereal.name.toLowerCase().includes(query)
//   );
//   if (filterd.length === 0) {
//     shoingdiv.innerHTML = "<p>سریالی دریافت نشد</p>";
//   } else {
//     filterd.forEach((sereal) => {
//       const div = document.createElement("div");
//       const strong = document.createElement("strong");
//       const p1 = document.createElement("p");
//       const img = document.createElement("img");
//       div.classList.add("div");
//       strong.textContent = sereal.name;
//       p1.textContent = sereal.gener;
//       img.src = sereal.Image;
//       div.appendChild(strong);
//       div.appendChild(p1);
//       div.appendChild(img);
//       shoingdiv.appendChild(div);
//     });
//   }
// });
