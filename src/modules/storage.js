const getTask = () => JSON.parse(localStorage.getItem('tasks')) || [];

const savedTask = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

module.exports = { getTask, savedTask };