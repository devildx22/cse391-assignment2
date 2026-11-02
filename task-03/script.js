const taskInput = document.getElementById("task-input");
const btnAdd = document.getElementById("btn-add");
const taskList = document.getElementById("task-list");

// 1. Load tasks from Local Storage
// JSON.parse converts the saved text back into a JavaScript array. 
// If nothing is saved yet, it starts with an empty array [].
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 2. Function to display tasks on the screen
function renderTasks() {
    taskList.innerHTML = ""; // Clear the list before redrawing it

    // Loop through each task in the array
    tasks.forEach((task, index) => {
        // Create an HTML list item for the task
        const li = document.createElement("li");
        
        // If the task is completed, add the CSS class that strikes through the text
        if (task.completed) {
            li.classList.add("completed");
        }

        // Add the checkbox, text, and delete button to the list item
        li.innerHTML = `
            <div>
                <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? "checked" : ""}>
                <span>${task.text}</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(li); // Put the item on the screen
    });
}

// 3. Function to add a new task
btnAdd.addEventListener("click", function() {
    const text = taskInput.value.trim(); // Get text and remove extra spaces
    if (text !== "") {
        // Add a new object to the array with the text and a default uncompleted status[cite: 2, 3]
        tasks.push({ text: text, completed: false });
        taskInput.value = ""; // Clear the input field
        saveAndRender();
    }
});
// Allow pressing "Enter" to add a task
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        btnAdd.click(); // Simulates a click on your "Add Task" button
    }
});
// 4. Function to toggle completion status
window.toggleTask = function(index) {
    tasks[index].completed = !tasks[index].completed; // Flips true to false, or false to true
    saveAndRender();
};

// 5. Function to delete a task
window.deleteTask = function(index) {
    tasks.splice(index, 1); // Removes 1 item from the array at the specific index[cite: 2]
    saveAndRender();
};

// 6. Helper function to save to Local Storage and redraw the screen
function saveAndRender() {
    // JSON.stringify converts the JavaScript array into text so it can be saved
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Draw the tasks immediately when the page loads
renderTasks();