let task = document.getElementById("task");
let button = document.getElementById("button");
let taskText = document.getElementById("taskText");
let taskList = document.querySelector("ul");

let tasks = [];

button.addEventListener("click", function () {

    // localStorage.setItem("task", task.value);
    // taskText.textContent = task.value;
    // task.value = "";

    let work = {

        "task": task.value

    };
    tasks.push(work);
    task.value = "";

    displaytask();


});

function displaytask() {

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        taskList.innerHTML += `
        <li style ="list-style: none;margin-bottom: 10px;"">
        <input type="checkbox" class="checkbox">
                 <span>${tasks[i].task}</span>
            </li>
        
        
        `;

    }



}

// if(localStorage.getItem("task")){
//     taskText.textContent = localStorage.getItem("task");
// }