import { qs } from "./main.js";
import { filterData } from "./filters.js";

export const searchWithParams = () => {
    const params = qs.parse(window.location.search.slice(1));
    searchInput.value = params.name || "";
    document.querySelector('.select__current').textContent = params.region || 'Filter by Region';
    if(params.name && params.region){
        filterData(params.name.toLowerCase(),params.region);
        console.log('double');
        return
    }
    if(params.name){
        filterData(params.name.toLowerCase(),'');
        console.log('name');
        return
    }
    if(params.region){
        filterData('',params.region);
        console.log('region');
        return
    }
    if(params.name && params.region){
        console.log(1);
    }

};