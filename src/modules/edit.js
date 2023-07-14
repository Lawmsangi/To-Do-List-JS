import { getTask, savedTask } from './storage.js';

const editTask = (index, edit) => {
  const tasks = getTask();
  tasks[index].description = edit;
  savedTask(tasks);
};

export default editTask;