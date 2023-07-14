const { getTask, savedTask } = require('./storage.js');

const checkTask = (index) => {
  const tasks = getTask();

  if (tasks[index].completed === false) {
    tasks[index].completed = true;
  } else {
    tasks[index].completed = false;
  }

  savedTask(tasks);
};

module.exports = checkTask;