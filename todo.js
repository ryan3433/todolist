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
    if (JSON.parse(localStorage.getItem(TODOS_LS)).length <= 9) {
        const li = document.createElement('li');
        //    const btn = document.createElement('button');
        const i = document.createElement('i')
        const span = document.createElement('span');
        span.innerText = text;
        i.classList.add("fas", "fa-trash");
        //    btn.appendChild(i);
        const newId = TODO_ARR.length;
        li.appendChild(span);
        li.appendChild(i);
        li.id = newId;
        ul.appendChild(li);
        i.addEventListener('click', deleteBtn);
        const toDoObj = {
            text: text,
            id: newId
        }
        TODO_ARR.push(toDoObj);
        saveToDo();
    } else {
        console.log('그만');
    }
}

function toDoHandler(event) {
    event.preventDefault();
    const userToDo = toDoInput.value;
    addToDo(userToDo);
    toDoInput.value = "";
}

function askToDo() {
}

function loadToDos() {
    const savedToDos = localStorage.getItem(TODOS_LS);
    if (savedToDos !== null) {
        const a = JSON.parse(savedToDos);
        a.forEach(function (todo) {
            addToDo(todo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", toDoHandler);
    //if (JSON.parse(savedToDos).length >= 9) {
    //alert('그만');
    //}
}

init();