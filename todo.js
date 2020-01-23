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

function togleBtn(event) {
    targetBtn = event.target;
    if (targetBtn.className === "far fa-square") {
        targetBtn.className = "far fa-check-square";
        targetBtn.nextSibling.style.textDecoration = "line-through";
    } else {
        targetBtn.className = "far fa-square";
        targetBtn.nextSibling.style.textDecoration = "none";
    }
}

function addToDo(text) {
    if (JSON.parse(localStorage.getItem(TODOS_LS)).length <= 6) {
        const li = document.createElement('li');
        //    const btn = document.createElement('button');
        const deleteIcon = document.createElement('i');
        const span = document.createElement('span');
        const togleIcon = document.createElement('i');
        span.innerText = `　${text}　`;
        togleIcon.classList.add("far", "fa-square");
        deleteIcon.classList.add("fas", "fa-trash");
        //    btn.appendChild(i);
        const newId = TODO_ARR.length;
        li.appendChild(togleIcon);
        li.appendChild(span);
        li.appendChild(deleteIcon);
        li.id = newId;
        ul.appendChild(li);
        togleIcon.addEventListener('click', togleBtn);
        deleteIcon.addEventListener('click', deleteBtn);
        const toDoObj = {
            text: text,
            id: newId
        }
        TODO_ARR.push(toDoObj);
        saveToDo();
    } else {
        toDoForm.addEventListener("submit", alert('그만'));
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
}

init();