jest.mock('./remove');
const { removeFromUI, removeFromStorage, removeCompletedTasks } = require('./remove.js');

describe('Remove items to TodoList', () => {
  const setTasks = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    'setItem',
  );
  const getTasks = jest.spyOn(Object.getPrototypeOf(localStorage), 'getItem');

  document.body.innerHTML = "<div id='list-toDo'><div id='item'>walk<button>remove</button></div></div>";

  it('Removes one Item', () => {
    removeFromUI('item');
    removeFromStorage('walk');
    const toDoList = document.getElementById('list-toDo');
    expect(toDoList.childNodes.length).toEqual(0);
    expect(setTasks).toHaveBeenCalled();
  });

  it('Removes completed', () => {
    removeCompletedTasks();
    expect(getTasks).toHaveBeenCalled();
    expect(setTasks).toHaveBeenCalled();
  });
});