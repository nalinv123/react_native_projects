/**
 * This file calls the OpenWeatherMap API to get current temparature.
 */
const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

function zipUrl(zip) {
    return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

async function fetchForecast(zip) {
    /**
     * fetch method is used for call the third party API.
     */
    try {
        const response = await fetch(zipUrl(zip));
        const responseJSON = await response.json();
        return {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
        };
    }
    catch (error) {
        console.error(error);
    }
}

export default { fetchForecast: fetchForecast };