const removeFromUI = (item) => {
  const task = document.getElementById(`${item}`);
  task.remove();
};

const removeFromStorage = (description) => {
  const tasks = [{
    description: 'walk',
    completed: true,
    index: 1,
  }];
  const filteredTasks = tasks.filter(
    (task) => task.description !== description,
  );
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
};

const removeCompletedTasks = () => {
  const tasks = [];
  const filteredTasks = tasks.filter((task) => task.completed === false);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
};

module.exports = { removeFromUI, removeFromStorage, removeCompletedTasks };