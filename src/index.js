// Event listener that waits for the DOMContentLoaded event before executing the callback function
document.addEventListener("DOMContentLoaded", () => {
  // Get reference to the element with ID "tasks" and assign it to the constant ToDoList
  const ToDoList = document.querySelector("#tasks")
  // Get reference to the element with ID "new-To-Do-Outline" and assign it to the constant newToDoOutline
  const newToDoOutline = document.querySelector("#new-To-Do-Outline");
  // Get reference to the element with ID "create-task-form" and assign it to the constant taskForm
  const taskForm = document.querySelector("#create-task-form");

  // Function to check if the input is valid (not empty)
  const validinput = (input) => {
    if(input === "") return false;
    else{
      return true;
    };
  };

  // Function to add a new task
  const toAddTask = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the toGetTask function to get the task from the input field
    toGetTask();
  };

  // Function to get the task from the input field
  const toGetTask = () => {
    // Get the value of the ariaValueMax property of the newToDoOutline element and assign it to the constant task
    const task = newToDoOutline.ariaValueMax;
    // Check if the task is valid
    if(validinput(task)) {
      // Call the creatingTask function to create and display the task
      creatingTask(task);
    }
  };

  // Function to create and display the task
  const creatingTask = (taskContent) => {
    // Create a new list item element and assign it to the constant task
    const task = document.createElement("li");
    // Set the text content of the task to the taskContent parameter
    task.textContent = taskContent;
    // Append the task to the ToDoList element
    ToDoList.appendChild(task);
    // Reset the form fields of the taskForm
    taskForm.reset();
  };

  // Add an event listener for the submit event on the taskForm, and call the toAddTask function when the event is triggered
  taskForm.addEventListener("submit", toAddTask);
});
