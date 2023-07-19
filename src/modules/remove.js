const removeFromUI = (e) => {
  e.currentTarget.parentElement.remove();
};

const removeFromStorage = (description) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const filteredTasks = tasks.filter((task) => task.description !== description);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
};

const removeCompletedTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const filteredTasks = tasks.filter((task) => task.completed === false);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
};

module.exports = { removeFromUI, removeFromStorage, removeCompletedTasks };