
export const getData = async (url) => {
    try {
        const responseData = await (await fetch(url)).json();
        data = responseData;
        localStorage.setItem('countries', JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
};