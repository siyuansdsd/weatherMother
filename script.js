// 获取即时天气信息
const api_key = '401d06340b9742dcb0d125152232304';
// const map_api_key = 'AIzaSyDAgJ-TSzscHC1VU2rc5vB_IXBd_gct4k4';
const rain_url = 'https://media.tenor.com/ywGAfNKzBy4AAAAC/rain-raining.gif';
const sunny_url = 'https://media4.giphy.com/media/wNipYAoZ3iaEE/200.webp?cid=ecf05e47vmpq8s6nbcy8buswi5lufbnflowp36atxbsugqh7&ep=v1_gifs_search&rid=200.webp&ct=g';


async function search_weather_by_name_async(city_name_alt) {
    var city_name = city_name_alt;
    fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city_name}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('weather').innerHTML = `${data.current.condition.text}`;
            document.getElementById('cityy').innerHTML = `${data.location.name}`;
            document.getElementById('country').innerHTML = `${data.location.country}`;
            document.getElementById('temp').innerHTML = `${data.current.temp_c} ℃`;
            document.getElementById('UV').innerHTML = `UV: ${data.current.uv}`;
            document.getElementById('localTime').innerHTML = `Local time: ${data.location.localtime}`;
            document.getElementById('updateTime').innerHTML = `Update time: ${data.current.last_updated}`;
            // get the feel temperature from the api
            document.getElementById('feelTemp').innerHTML = `Feel temperature: ${data.current.feelslike_c} ℃`;
            document.getElementById('windSpeed').innerHTML = `Wind speed: ${data.current.wind_kph} km/h`;
            document.getElementById('humidity').innerHTML = `Humidity: ${data.current.humidity} %`;
            // I want to get the current time
            setInterval(update_time, 1000);
            var la_val = data.location.lat;
            var lo_val = data.location.lon;
            // localStorage.setItem('la_val', la_val);
            // localStorage.setItem('lo_val', lo_val);
            // var script = document.createElement('script');
            // script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDAgJ-TSzscHC1VU2rc5vB_IXBd_gct4k4&callback=initMap';
            // document.body.appendChild(script);
            // var map = new google.maps.Map(document.getElementById('map'), {
            //     center: { lat: la_val, lng: lo_val },
            //     zoom: 8
            // });
            // var geocoder = new google.maps.Geocoder();

            // geocoder.geocode({ 'address': `${city_name}` }, function(results, status) {
            //     if (status === 'OK') {
            //         var marker = new google.maps.Marker({
            //             map: map,
            //             position: results[0].geometry.location
            //         });
            //     } else {
            //         alert('Geocode was not successful for the following reason: ' + status);
            //     }
            // });


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

function update_time() {
    var date = new Date();
    var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('time-container').innerHTML = `Your time: ${hour} : ${minute} : ${second}`;
}

function initMap(la_val = localStorage.getItem("la_val"), lo_val = (localStorage.getItem("lo_val"))) {
    // The location of Uluru
    const search_place = { lat: la_val, lng: lo_val };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: search_place,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: search_place,
        map: map,
    });
}