const api_key = '401d06340b9742dcb0d125152232304';
// const weather = document.getElementById("citty");
// var city_name = "London";

window.onload = aa();

async function search_weather_by_name_async(city_name_alt) {
    var city_name = city_name_alt;
    fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city_name}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            weather.innerHTML = "wocaonima";
            document.getElementById('cityy').innerHTML = data.location.name;
            console.log(document.getElementById('cityy').innerHTML)
            document.getElementById('country').innerHTML = data.location.country;
            document.getElementById('temp').innerHTML = data.current.temp_c;
            document.getElementById('icon').src = data.current.condition.icon;
        })
}

async function getValue() {
    var city_name = await document.getElementById("city").value;
    await console.log(city_name);
    await search_weather_by_name_async(city_name);
    console.log(city_name);
}

function aa() {
    setTimeout(getValue(), 2000);
}