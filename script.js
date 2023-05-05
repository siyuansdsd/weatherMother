// 获取即时天气信息
const api_key = '401d06340b9742dcb0d125152232304';

async function search_weather_by_name_async(city_name_alt) {
    var city_name = city_name_alt;
    fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city_name}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather').innerHTML = `weather condition: ${data.current.condition.text}`;
            document.getElementById('cityy').innerHTML = `Search place: ${data.location.name}`;
            document.getElementById('country').innerHTML = `Country of search place: ${data.location.country}`;
            document.getElementById('temp').innerHTML = `temperature in celsius: ${data.current.temp_c} ℃`;
            document.getElementById('UV').innerHTML = `UV: ${data.current.uv}`;
            document.getElementById('localTime').innerHTML = `Local time: ${data.location.localtime}`;
            document.getElementById('updateTime').innerHTML = `Update time: ${data.current.last_updated}`;
            // get the feel temperature from the api
            document.getElementById('feelTemp').innerHTML = `Feel temperature: ${data.current.feelslike_c} ℃`;
        })
}

async function getValue() {
    var city_name = await document.getElementById("city").value;
    search_weather_by_name_async(city_name);
}

document.getElementById("getBtn").addEventListener("click", (event) => {
    event.preventDefault();
    getValue();
});