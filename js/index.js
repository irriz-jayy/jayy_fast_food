document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

function fetchData(data) {
  fetch("https://api.jsonbin.io/v3/b/6399eed0dfc68e59d5681230")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
