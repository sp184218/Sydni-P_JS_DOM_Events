// Step 1: Global Variables
const taskInput = document.getElementById("taskInput"); // Input field for task
const addTaskButton = document.getElementById("addTask"); // Add task button
const taskList = document.getElementById("taskList"); // The ul element where tasks will be listed

// Step 2: Create List Item Function
function createListItem(taskText) {
    // Create a new li element
    const listItem = document.createElement("li");
    
    // Set the text of the list item to the taskText
    listItem.textContent = taskText;

    // Add a click event to toggle completion of the task
    listItem.addEventListener("click", function() {
        listItem.classList.toggle("completed");
    });

    // Return the list item
    return listItem;
}

// Step 3: Add Task Function
function addTask() {
    const taskText = taskInput.value; // Get the value of the input field

    // If the input is not empty, create and add the task
    if (taskText.trim() !== "") {
        const listItem = createListItem(taskText); // Create a new list item
        taskList.appendChild(listItem); // Append it to the task list
        taskInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a task!"); // Show an alert if the input is empty
    }
}

// Step 4: Event Listener for Add Task Button
addTaskButton.addEventListener("click", addTask);

// Optional: Press "Enter" to add a task (for better UX)
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
