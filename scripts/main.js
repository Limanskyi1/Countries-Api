// Imports
import { createCountryItem } from "./createCountryItem.js";
import { filterData } from "./filters.js";
import { getData } from "./getData.js";
import { select } from "./select.js";
import { searchWithParams } from "./getParamsSearch.js";
export let qs = Qs;

const params = qs.parse(window.location.search.slice(1)) || {};
const countryList = document.querySelector('.country-items');

export const renderData = (data) => {
  if (countryList) {
    countryList.innerHTML = "";
  }
  data.forEach((item) => {
    const div = createCountryItem(item);
    countryList.appendChild(div);
  });
};

selectItems.forEach((item) => {
  item.addEventListener("click", () => {
    params.region = item.textContent;
    if (params.region === "All") {
      params.region = "";
    }
    const newUrl = `${window.location.pathname}?${qs.stringify(params)}`;
    window.history.pushState({}, "", newUrl);
    filterData(params.name, params.region);
  });
});

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchInputValue = searchInput.value;
    params.name = searchInputValue;
    if (searchInputValue) {
      const newUrl = `${window.location.pathname}?${qs.stringify(params)}`;
      window.history.pushState({}, "", newUrl);
    } else {
      params.name = "";
      const newUrl = `${window.location.pathname}?${qs.stringify(params)}`;
      window.history.pushState({}, "", newUrl);
    }
    filterData(searchInputValue, params.region);
  });
}


countryList.addEventListener('click', (event) => {
    const countryItem = event.target.closest('.country-item');
    if (countryItem) {
        const name = countryItem.querySelector('.country-name').textContent;
        localStorage.setItem('country-details', JSON.stringify([name]));
        window.location.href = `/detail.html`;
    }
});

async function init() {
  await getData(url);
  renderData(data);
  select();
  searchWithParams();
}

init();





