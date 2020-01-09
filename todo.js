const toDo = document.querySelector('.todo');
const toDoForm = toDo.querySelector('.toDoForm');
const toDoInput = toDoForm.querySelector('.toDoInput');
const ul = document.querySelector('.toDoUl');

const TODOS_LS = "todo";
let TODO_ARR = [];

function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(TODO_ARR));
}
function filterFnc(value) {
    return value.id !== parseInt(targetBtn.parentElement.id);
}

function deleteBtn(event) {
    targetBtn = event.target;
    targetBtn.parentElement.parentElement.removeChild(targetBtn.parentElement);
    TODO_ARR = TODO_ARR.filter(filterFnc);
    saveToDo()
}

function addToDo(text) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const span = document.createElement('span');
    span.innerText = text;
    btn.innerText = "❌";
    const newId = TODO_ARR.length;
    li.appendChild(btn);
    li.appendChild(span);
    li.id = newId;
    ul.appendChild(li);
    btn.addEventListener('click', deleteBtn);
    const toDoObj = {
        text: text,
        id: newId
    }
    TODO_ARR.push(toDoObj);
    saveToDo();
}

function toDoHandler(event) {
    event.preventDefault();
    const userToDo = toDoInput.value;
    addToDo(userToDo);
    toDoInput.value = "";
}

function askToDo() {
    toDoForm.addEventListener("submit", toDoHandler);
}

function loadToDos() {
    const savedToDos = localStorage.getItem(TODOS_LS);
    if (savedToDos !== null) {
        askToDo();
    }
}

function init() {
    askToDo();
}

init();