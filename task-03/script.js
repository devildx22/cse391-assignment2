const taskInput = document.getElementById("task-input");
const btnAdd = document.getElementById("btn-add");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        
        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <div>
                <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? "checked" : ""}>
                <span>${task.text}</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(li);
    });
}

btnAdd.addEventListener("click", function() {
    const text = taskInput.value.trim();
    if (text !== "") {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        saveAndRender();
    }
});
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        btnAdd.click();
    }
});
window.toggleTask = function(index) {
    tasks[index].completed = !tasks[index].completed;
    saveAndRender();
};

window.deleteTask = function(index) {
    tasks.splice(index, 1);
    saveAndRender();
};

function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

renderTasks();