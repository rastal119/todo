const TASKS_KEY = "my-list";
// empty arr
let tasks = [];
loadFromLocalStorage();

function addTasks() {
    // disable refresh
    event.preventDefault();
    //get input boxes
    const taskTextBox = document.getElementById("taskTextBox");
    const dateNumberBox = document.getElementById("dateNumberBox");
    const timeNumberBox = document.getElementById("timeNumberBox");
  

    // add items value
    const item = {
        do: taskTextBox.value,
        date: dateNumberBox.value,
        time: timeNumberBox.value,

    };
    tasks.push(item);


    //   save to local storage
    saveToLocalStorage();

    // display items
    displayToDoList();

    taskTextBox.value = "";
    dateNumberBox.value = "";
    timeNumberBox.value = "";

    // focus
    taskTextBox.focus();

}

function displayToDoList() {
    const toDoList = document.getElementById("toDoList");
    let html = "";
    for (let i = 0; i < tasks.length; i++) {
        html += `<div class="card text-center mb-3">
        <div class="card-fade-in">
          <h5 class="card-title"></h5>
          <p class="card-text">${tasks[i].do}</p>
          <p class="card-text">${tasks[i].date}</p>
          <p class="card-text">${tasks[i].time}</p>
          <a href="#" class="btn btn-primary" onclick= "deleteItem(this)"> x</a>
        </div>
      </div> `

    }
    toDoList.innerHTML = html;
}
function deleteItem(element) {

    const index = element.id;
    tasks.splice(index, 1);

    saveToLocalStorage();

    displayToDoList();
}

function saveToLocalStorage() {

    const str = JSON.stringify(tasks);
    localStorage.setItem(TASKS_KEY, str);
}
function loadFromLocalStorage() {
    const strTasks = localStorage.getItem(TASKS_KEY);
    if (strTasks != null && strTasks.length > 0) {
        tasks = JSON.parse(strTasks);
    }
    displayToDoList();
}

const element = document.querySelector('.my-element');
element.classList.add('fade-in');
