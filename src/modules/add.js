const { savedTask, getTask } = require('./storage.js');

const addTaskToUI = (description) => {
  const tasks = document.getElementById('list-toDo');
  const task = document.createElement('div');
  task.className = 'to-do';
  task.innerHTML = `
                        <input type="checkbox" class= 'task'/>
                        <span class="span" spellcheck="false" contenteditable="true">${description}</span>
                        <button class = 'remove-btn'><i class="fa-solid fa-trash"></i></button>
     `;
  tasks.appendChild(task);
};

const addTaskToStorage = (description) => {
  const tasks = getTask();
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  savedTask(tasks);
};

module.exports = { addTaskToStorage, addTaskToUI };