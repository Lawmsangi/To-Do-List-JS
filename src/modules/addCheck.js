const { getTask, savedTask } = require('./storage.js');

const addTask = () => {
  const tasks = getTask();
  tasks.forEach((task) => {
    if (task.completed === false) {
      task.completed = true;
    } else if (task.completed === true) {
      task.completed = false;
    }
  });
  savedTask(tasks);
};

module.exports = addTask;