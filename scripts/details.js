import { renderDetailCountry } from "./renderDetailCountry.js";

document.addEventListener("DOMContentLoaded", () => {
  const detailCountry = JSON.parse(localStorage.getItem("country-details"));

  const data = JSON.parse(localStorage.getItem("countries"));

  const item = data.find(
    (item) =>
      item.name.toLowerCase() ===
      detailCountry[detailCountry.length - 1].toLowerCase()
  );

  renderDetailCountry(item);

  const bordersContainer = document.querySelector(".country .wrapper");

  bordersContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("border")) {
      const alpha3Code = event.target.textContent;
      const clickedCountry = data.find(
        (item) => item.alpha3Code === alpha3Code
      );
      let prev = JSON.parse(localStorage.getItem("country-details")) || [];
      localStorage.setItem(
        "country-details",
        JSON.stringify([...prev, clickedCountry.name])
      );
      renderDetailCountry(clickedCountry);
    }
  });

  document
    .querySelector(".country .back-btn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      let prev = JSON.parse(localStorage.getItem("country-details")) || [];
      const newArray = prev.slice(0, prev.length - 1);
      const prevCountry = newArray[newArray.length - 1];
      if (prevCountry) {
        const item = data.find(
          (item) => item.name.toLowerCase() === prevCountry.toLowerCase()
        );
        renderDetailCountry(item);
        localStorage.setItem("country-details", JSON.stringify([...newArray]));
      } else {
        window.location.href = "/";
      }
    });
});
