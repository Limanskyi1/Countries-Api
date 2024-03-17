export const createCountryItem = (item) => {
    let div = document.createElement('div');
    div.classList.add('country-item');
    div.innerHTML = `
        <img src="${item.flag}" alt="">
        <div class="country-item-info">
            <h3 class="country-name">${item.name || item.name[0]}</h3>
            <p class="country-population">
                <span>Population:</span>
                ${item.population.toLocaleString()}
            </p>
            <p class="country-region">
                <span>Region:</span>
                ${item.region}
            </p>
            <p class="country-region">
                <span>Capital:</span>
                ${item.capital}
            </p>
        </div>
    `;
return div;
}