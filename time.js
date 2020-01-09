const clock = document.querySelector('.clock');
const time = clock.querySelector('h1');

function timeFuc() {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    time.innerText = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;
}

function init() {
    timeFuc();
    setInterval(timeFuc, 1000);
}

init();