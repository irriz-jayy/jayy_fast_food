document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

function fetchData(data) {
  fetch("http://localhost:3000/snacks")
    .then((response) => response.json())
    .then((data) => renderMenu(data));
}

function renderMenu(data) {
  const menu = document.getElementById("menu");
  console.log(data);
  data.forEach((data) => {
    const menuSpan = document.createElement("span");
    menuSpan.innerText = data.name;

    menu.appendChild(menuSpan);
    //   });
    // }

    menuSpan.addEventListener("click", () => {
      const description = document.getElementById("description");
      description.textContent = data.description;

      const image = document.getElementById("card");
      image.setAttribute("src", data.image);
    });
  });
}
