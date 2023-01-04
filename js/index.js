// Fetch for each object
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/Tacos")
    .then((response) => response.json())
    .then((data) => renderTacos(data));

  function renderTacos(data) {
    data.forEach((data) => {
      const foodbutton = document.getElementById("tacos");

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
  fetch("http://localhost:3000/Pizzas")
    .then((response) => response.json())
    .then((data) => renderPizza(data));

  function renderPizza(data) {
    data.forEach((data) => {
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
    .then((data) => renderChips(data));

  function renderChips(data) {
    data.forEach((data) => {
      const foodbutton = document.getElementById("chips");

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
  fetch("http://localhost:3000/Smoothies")
    .then((response) => response.json())
    .then((data) => renderSmoothies(data));

  function renderSmoothies(data) {
    data.forEach((data) => {
      const foodbutton = document.getElementById("smoothies");

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
  fetch("http://localhost:3000/Sodas")
    .then((response) => response.json())
    .then((data) => renderSodas(data));

  function renderSodas(data) {
    data.forEach((data) => {
      const foodbutton = document.getElementById("sodas");

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
