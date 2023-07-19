const addTaskToUI = (description) => {
  const tasks = document.getElementById('list-toDo');
  const task = document.createElement('div');
  task.className = 'to-do';
  task.classList.add = 'completed';
  task.innerHTML = `
                        <input type="checkbox" class= 'task' id="checkbox"/>
                        <span class="span" spellcheck="false" contenteditable="true">${description}</span>
                        <button class = 'remove-btn'><i class="fa-solid fa-trash"></i></button>
     `;
  tasks.appendChild(task);
};

const addTaskToStorage = (description) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

module.exports = { addTaskToStorage, addTaskToUI };