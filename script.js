// Grab the HTML elements
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// 1. Pull saved tasks from memory (or start empty)
let myTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 2. Loop through saved tasks and display them
myTasks.forEach(function(taskText) {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    const deltask = document.createElement("button");
    deltask.textContent = "Delete";

    deltask.addEventListener("click", function() {
        taskList.removeChild(newTask);
        // 1. Find the exact position of the task in the array
const taskIndex = myTasks.indexOf(taskText); 

// 2. Remove 1 item at that exact position
myTasks.splice(taskIndex, 1);

// 3. Resave the updated array to memory
localStorage.setItem("tasks", JSON.stringify(myTasks));
    });

    newTask.appendChild(deltask);
    taskList.appendChild(newTask);
});

// 3. Handle the "Add Task" button click
addButton.addEventListener("click", function() {
    // Capture the text before the input gets cleared
    const currentTaskText = taskInput.value; 

    // Create the task
    const newTask = document.createElement("li");
    newTask.textContent = currentTaskText;

    // Create the delete button
    const deltask = document.createElement("button");
    deltask.textContent = "Delete";

    // Delete logic for newly added tasks
    deltask.addEventListener("click", function() {
        taskList.removeChild(newTask);
        
        // 1. Find the exact position of the newly added task
        const taskIndex = myTasks.indexOf(currentTaskText); 
        // 2. Remove it
        myTasks.splice(taskIndex, 1);
        // 3. Resave
        localStorage.setItem("tasks", JSON.stringify(myTasks));
    });

    // Put them on the screen
    newTask.appendChild(deltask);
    taskList.appendChild(newTask);

    // Save to array and browser memory
    myTasks.push(currentTaskText);
    localStorage.setItem("tasks", JSON.stringify(myTasks));

    // Clear the input box
    taskInput.value = "";
});
