const form = document.querySelector('.form');
const input = document.querySelector('.input');
const question = document.querySelector('.question');

const USER_LS = 'name';
const CSS_CL = 'cont';

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function submitHandeler(event) {
    event.preventDefault();
    const currentUser = input.value;
    saveName(currentUser);
    printName(currentUser);
}

function askName() {
    form.classList.add(CSS_CL);
    question.classList.add(CSS_CL);
    form.addEventListener("submit", submitHandeler);
}

function printName(text) {
    form.classList.remove(CSS_CL);
    question.classList.add(CSS_CL);
    question.innerText = `Hello ${text}`;
}

function loadGreeting() {
    const savedUser = localStorage.getItem(USER_LS);
    if (savedUser === null) {
        askName();
    } else {
        printName(savedUser);
    }
}

function init() {
    loadGreeting();
}

init();