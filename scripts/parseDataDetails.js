export function parseLanguages(langs) {
  return langs.map((element) => element.name).join(", ");
}

export function parseCurrencies(currencies) {
  return currencies.map((element) => element.name).join(", ");
}

export function parseBorders(arr) {
  if (arr) {
    return `<h4>Border Countries:</h4>${arr
      .map((item) => `<span class="border">${item}</span>`)
      .join("")}`;
  } else {
    return "";
  }
}
