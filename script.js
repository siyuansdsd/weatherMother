const api_key = '401d06340b9742dcb0d125152232304';
var city_name = 'London';

function search_weather_by_name(city_name_alt) {
    city_name = city_name_alt;
    fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city_name}&aqi=no`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

search_weather_by_name('London');