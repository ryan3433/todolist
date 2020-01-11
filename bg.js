const body = document.querySelector('body');
//
const IMGNUM = 14;
//
function getRandom() {
    num = Math.floor(Math.random() * IMGNUM) + 1;
    return num;
}
//
//function printPictures() {
//    body.style.backgroundImage = 'url(image/bg/' + getRandom() + '.jpg)';
//}
//






const bgImages = {}

function makeNewImages() {
    bg = new Array();
    for (i = 1; i <= IMGNUM; i++) {
        bg[i] = new Image();
        bg[i].src = './image/bg/' + i + '.jpg';
    }
    console.dir(bg);
    body.style.backgroundImage = 'url(' + bg[getRandom()].src + ')';
}

function init() {
    makeNewImages();
}

init();

