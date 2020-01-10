const weatherTemp = document.querySelector('.weather')
const weatherLoca = document.querySelector('.location')


const API_KEY = '155dbddc99f38481b41be745f3afc12d';
//URL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

const COORDS_LS = 'coords';

function saveWeather(text) {
    localStorage.setItem(COORDS_LS, JSON.stringify(text))
}

function getAndPrint(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        weatherTemp.innerText = json.main.temp;
        weatherLoca.innerText = json.name;
    })
}


function success(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const weatherObj = {
        latitude: lat,
        longitude: lon
    }
    saveWeather(weatherObj)
    getAndPrint(lat, lon)
}

function error(err) {
    console.warn('ERROR(' + err.code + ') :' + err.message);
}

function getGeo() {
    const geoData = JSON.parse(localStorage.getItem(COORDS_LS));
    if (geoData === null) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        getAndPrint(geoData.latitude, geoData.longitude);
    }
}

function init() {
    getGeo();
}

init();