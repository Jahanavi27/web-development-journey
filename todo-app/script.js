function addTask() {

    let taskInput =
        document.getElementById("taskInput");

    let taskText =
        taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task");

        return;
    }

    let li =
        document.createElement("li");

    let span =
        document.createElement("span");

    span.innerText = taskText;

    span.onclick = function () {

        completeTask(this);

    };

    let deleteButton =
        document.createElement("button");

    deleteButton.innerText = "Delete";

    deleteButton.onclick = function () {

        deleteTask(this);

    };

    li.appendChild(span);

    li.appendChild(deleteButton);

    document
        .getElementById("taskList")
        .appendChild(li);

    saveTasks();
    taskInput.value = "";
}

function deleteTask(button) {

    button.parentElement.remove();

    saveTasks();
}

function completeTask(task) {

    task.classList.toggle("completed");
}

window.onload = loadTasks;

function loadTasks() {

    let tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(taskText) {

        let li =
            document.createElement("li");

        let span =
            document.createElement("span");

        span.innerText = taskText;

        span.onclick = function() {

            completeTask(this);

        };

        let deleteButton =
            document.createElement("button");

        deleteButton.innerText = "Delete";

        deleteButton.onclick = function() {

            deleteTask(this);

        };

        li.appendChild(span);

        li.appendChild(deleteButton);

        document
            .getElementById("taskList")
            .appendChild(li);

    });
}

function saveTasks() {

    let tasks = [];

    document
        .querySelectorAll("#taskList span")
        .forEach(function(task) {

            tasks.push(task.innerText);

        });

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}