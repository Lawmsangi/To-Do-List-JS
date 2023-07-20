const checkTask = (index) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (tasks[index].completed === false) {
    tasks[index].completed = true;
  } else {
    tasks[index].completed = false;
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  return tasks[index].completed;
};

module.exports = checkTask;