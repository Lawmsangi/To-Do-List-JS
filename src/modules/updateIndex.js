const { getTask, savedTask } = require('./storage.js');

const updateIndex = () => {
  const tasks = getTask();
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  savedTask(tasks);
};

export default updateIndex;