const { getTask } = require('./storage.js');

const removeFromUI = (e) => {
  e.currentTarget.parentElement.remove();
};

const removeFromStorage = (description) => {
  const tasks = getTask();
  const filteredTasks = tasks.filter((task) => task.description !== description);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
};

const removeCompletedTasks = () => {
  const tasks = getTask();
  const filteredTasks = tasks.filter((task) => task.completed === false);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
 
  
}

module.exports = { removeFromUI, removeFromStorage, removeCompletedTasks };