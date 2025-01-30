// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task function
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

// Function to add a new task
function addTask(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button>Delete</button>
  `;

  // Mark task as completed
  li.querySelector('span').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete task
  li.querySelector('button').addEventListener('click', () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
}