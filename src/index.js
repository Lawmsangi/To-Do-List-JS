import { addTaskToStorage, addTaskToUI } from './modules/add.js';
import editTask from './modules/edit.js';
import { removeFromUI, removeFromStorage } from './modules/remove.js';
import { getTask } from './modules/storage.js';
import updateIndex from './modules/updateIndex.js';
import './style.css';

const editTasks = () => {
  const editContents = document.querySelectorAll('.span');
  editContents.forEach((item, index) => {
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        editTask(index + 1, e.currentTarget.innerHTML);
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

const form = document.getElementById('form-list');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const addInput = document.getElementById('add-input');
  const description = addInput.value;
  addTaskToUI(description);
  addTaskToStorage(description);
  editTasks();
  removeTasks();
  addInput.value = '';
});

const tasks = getTask();
tasks.forEach((item) => {
  addTaskToUI(item.description);
});
removeTasks();
editTasks();