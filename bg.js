const body = document.querySelector('body');

const IMGNUM = 14;

function getImage() {
    num = Math.floor(Math.random() * IMGNUM) + 1;
    return num;
}

function printPictures() {
    body.style.backgroundImage = 'url(image/bg/' + getImage() + '.jpg)';
}
function init() {
    printPictures();
}

init();
