import { getTask, savedTask } from './storage.js';

const editTask = (index, edit) => {
  const tasks = getTask();
  tasks.forEach((task) => {
    if (task.index === index) {
      task.description = edit;
    }
  });
  savedTask(tasks);
};

export default editTask;