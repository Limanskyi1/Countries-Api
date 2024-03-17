import { renderData } from "./main.js";

const notFound = document.querySelector(".not-found");
const countryList = document.querySelector(".country-items");

export const filterData = (nameFilter, regionFilter) => {
  let filteredData = data;

  if (nameFilter) {
    const nameRegex = new RegExp(`^${nameFilter}`, "i");
    filteredData = filteredData.filter((item) => {
      const itemName = Array.isArray(item.name) ? item.name[0] : item.name;
      return nameRegex.test(itemName);
    });
  }

  if (regionFilter) {
    if (regionFilter !== "" || regionFilter === "All") {
      filteredData = filteredData.filter(
        (item) => item.region.toLowerCase() === regionFilter.toLowerCase()
      );
    }
  }

  if (filteredData.length > 0) {
    renderData(filteredData);
    notFound.style.display = "none";
  } else {
    countryList.innerHTML = "";
    notFound.style.display = "block";
  }
};
