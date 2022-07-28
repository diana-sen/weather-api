import fetch from "node-fetch"
import {} from "dotenv/config"

let CLIENT = process.env.aKey;

let weather = {
apikey: CLIENT,
fetchWeather: async function() {
    await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=${CLIENT}`
    ).then((response) => response.json())
    .then((data) => console.log(data));
},
};

weather.fetchWeather();
