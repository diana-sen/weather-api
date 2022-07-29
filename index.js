import fetch from "node-fetch"
import {} from "dotenv/config"

let CLIENT = process.env.aKey;

let weather = {
apikey: CLIENT,
fetchWeather: async function(city) {
    await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=`
        + city+ "&units=metric&appid=" + this.apikey)
        .then((response) => response.json())
        //.then((data) => console.log(data));
        .then((data)=> this.showWeather(data));
},
showWeather: function(data) {
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    //console.log(name,icon,description,temp,humidity,speed);
    
   // document.getElementById(".city").innerHTML= "Weather in" + name;
   
}

};


weather.fetchWeather("Tokyo");

