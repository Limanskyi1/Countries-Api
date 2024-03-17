import {
    parseLanguages,
    parseBorders,
    parseCurrencies,
  } from "./parseDataDetails.js";

export const renderDetailCountry = (obj) => {
  const wrapper = document.querySelector(".country .wrapper");
  wrapper.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("item");
  const languages = obj.languages;
  const borders = obj.borders;
  div.innerHTML = `
  <div class="country__img">
  <img src="${obj.flags.png}" alt="">
</div>
<div class="country__info">
  <h2>${obj.name.common || obj.name}</h2>
  <div class="country__info-block">
    <div class="country__info-str"><span>Native Name:</span> ${
      obj.name.common || obj.nativeName
    }</div>
    <div class="country__info-str"><span>Population:</span> ${obj.population.toLocaleString()}</div>
    <div class="country__info-str"><span>Region: </span> ${obj.region}</div>
    <div class="country__info-str"><span>Sub Region: </span> ${
      obj.subregion
    }</div>
    <div class="country__info-str"><span>Capital: </span> ${obj.capital}</div>
    <div class="country__info-str"><span>Top Level Domain: </span>${
      obj.topLevelDomain || obj.topLevelDomain
    }</div>
    <div class="country__info-str"><span>Currencies: </span>${parseCurrencies(
      obj.currencies
    )}</div>
    <div class="country__info-str"><span>Languages: </span>${parseLanguages(
      languages
    )}</div>
  </div>
  <div class="country__info-borders">
    ${parseBorders(borders)}
  </div>
</div>
    `;
  wrapper.appendChild(div);
  return div;
};
