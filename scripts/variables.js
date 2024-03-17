// 1.Посмотреть все страны из API на главной странице
// 2.Поиск страны по input полю
// 3.Фильтровать страны по региону
// 4.Нажмите на страну, чтобы увидеть более подробную информацию на отдельной странице.
// 5.Нажмите на граничащие страны на странице сведений.
// 7.Просматривайте состояния наведения и фокуса для всех интерактивных элементов на странице.
// 8. переключение цветовой схемы между светлым и темным режимом.


const url = './data.json';
const countryList = document.querySelector('.country-items');
const searchInput = document.querySelector('.search-country');
const searchBtn = document.querySelector('.input svg');
const selectItems = document.querySelectorAll('.select__item');
const currentSelectItem = document.querySelector('.select__current');
let countryItems;
const form = document.querySelector('.form');
const notFound = document.querySelector('.not-found');

// =============================

const singleCountryBlock = document.querySelector('.country .wrapper');
const singleCountryData = JSON.parse(localStorage.getItem('country'));


// ==============================

const paginationContainer = document.getElementById('pagination');
const itemsPerPage = 16;
let currentPage = 1;
let data;


