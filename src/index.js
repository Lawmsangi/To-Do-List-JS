import { addTaskToStorage, addTaskToUI } from './modules/add.js';
import checkTask from './modules/checkTask.js';
import checkUI from './modules/checkUI.js';
import editTask from './modules/edit.js';
import { removeFromUI, removeFromStorage, removeCompletedTasks } from './modules/remove.js';
import { getTask } from './modules/storage.js';
import updateIndex from './modules/updateIndex.js';
import './style.css';

const display = () => {
  const list = document.getElementById('list-toDo');
  list.innerHTML = '';
  const tasks = getTask();
  tasks.forEach((task) => {
    addTaskToUI(task.description);
  });
};

const editTasks = () => {
  const editContents = document.querySelectorAll('.span');
  editContents.forEach((item, index) => {
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        editTask(index, e.currentTarget.innerHTML);
        item.blur();
      }
    });
  });
};

const removeTasks = () => {
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach((button) => button.addEventListener('click', (e) => {
    removeFromStorage(e.currentTarget.parentElement.children[1].innerHTML);
    removeFromUI(e);
    updateIndex();
  }));
};

const checkTasks = () => {
  const checkBox = document.querySelectorAll('.task');
  checkBox.forEach((item, index) => {
    checkUI(item, index, item.parentElement.children[1]);
  });
  checkBox.forEach((item, index) => {
    item.addEventListener('change', (e) => {
      e.preventDefault();
      checkTask(index);
      checkUI(item, index, item.parentElement.children[1]);
    });
  });
};

const removeAll = document.getElementById('remove-all');
removeAll.addEventListener('click', () => {
  removeCompletedTasks();
  display();
  updateIndex();
});

const form = document.getElementById('form-list');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const addInput = document.getElementById('add-input');
  const description = addInput.value;
  addTaskToUI(description);
  addTaskToStorage(description);
  addInput.value = '';
  window.location.reload();
});

const tasks = getTask();
tasks.forEach((item) => {
  addTaskToUI(item.description);
});
removeTasks();
editTasks();
checkTasks();
