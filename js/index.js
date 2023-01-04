// Fetch for each object
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/Tacos")
    .then((response) => response.json())
    .then((data) => console.log(data));
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/Pizzas")
    .then((response) => response.json())
    .then((data) => renderPizza(data));

  function renderPizza(data) {
    data.forEach((data) => {
      console.log(data);
      const foodbutton = document.getElementById("pizzas");

      foodbutton.addEventListener("click", () => {
        const name = document.getElementById("name");
        name.innerText = data.name;

        const price = document.getElementById("price");
        price.innerText = data.price;

        const image = document.getElementById("image");
        image.setAttribute("src", data.image);
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/Chips")
    .then((response) => response.json())
    .then((data) => console.log(data));
});
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/Smoothies")
    .then((response) => response.json())
    .then((data) => console.log(data));
});
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/Sodas")
    .then((response) => response.json())
    .then((data) => console.log(data));
});

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

// function renderMenu(data) {
//   const menu = document.getElementById("menu");
//   console.log(data);
//   data.forEach((data) => {
//     const menuSpan = document.createElement("span");
//     menuSpan.innerText = data.name;

//     menu.appendChild(menuSpan);
//     //   });
//     // }

//     menuSpan.addEventListener("click", () => {
//       const description = document.getElementById("description");
//       description.textContent = data.description;

//       const image = document.getElementById("card");
//       image.setAttribute("src", data.image);
//     });
//   });
// }
