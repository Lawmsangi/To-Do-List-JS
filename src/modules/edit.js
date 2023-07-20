const editTask = (index, edit) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks[index].description = edit;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks[index].description;
};

module.exports = editTask;