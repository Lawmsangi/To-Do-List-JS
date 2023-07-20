const checkTask = require('./checkTask.js');
const { addTaskToStorage } = require('./add.js');

describe('Check items in TodoList', () => {
  const setTasks = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    'setItem',
  );
  const getTasks = jest.spyOn(Object.getPrototypeOf(localStorage), 'getItem');

  test('Checks an Item', () => {
    addTaskToStorage('Walk');
    expect(getTasks).toHaveBeenCalled();
    expect(setTasks).toHaveBeenCalled();
    expect(checkTask(0)).toBe(true);
    expect(getTasks).toHaveBeenCalled();
    expect(setTasks).toHaveBeenCalled();
  });
});