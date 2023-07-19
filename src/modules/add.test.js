const {addTaskToUI, addTaskToStorage} = require('./add')

describe("add items to TodoList", () => {
  const setTasks = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    "setItem"
  );
  const getTasks = jest.spyOn(Object.getPrototypeOf(localStorage), "getItem");

  document.body.innerHTML = "<div id='list-toDo'></div>";

  it("Adds one Item", () => {
    addTaskToUI('walk')
    addTaskToStorage('walk')
    const toDoList = document.getElementById("list-toDo");
    expect(toDoList.childNodes.length).toEqual(1);
    expect(getTasks).toHaveBeenCalled();
    expect(setTasks).toHaveBeenCalled();
  });
});