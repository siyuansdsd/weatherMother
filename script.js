const api_key = '401d06340b9742dcb0d125152232304';
var city_name = 'London';
const kv = {};

async function getValue() {
    city_name = await document.getElementById("city").value;
    search_weather_by_name_async(city_name);
    console.log(city_name);
}

async function search_weather_by_name_async(city_name_alt) {
    city_name = city_name_alt;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city_name}&aqi=no`);
    const data = await response.json();
    console.log(data);
    kv['city'] = data.location.name;
    kv['country'] = data.location.country;
    kv['temp'] = data.current.temp_c;
    kv['icon'] = data.current.condition.icon;
    document.getElementById('city').innerHTML = kv['city'];
    document.getElementById('country').innerHTML = kv['country'];
    document.getElementById('temp').innerHTML = kv['temp'];
    document.getElementById('icon').src = kv['icon'];
}