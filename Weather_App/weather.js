const apiKey = "ebff63de47e97542f39cf9af6e46f9e0";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; 
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city)
{
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})
