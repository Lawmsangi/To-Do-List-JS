const editTask = require("./edit.js");
const { addTaskToStorage } = require("./add.js");

describe("Edit items in TodoList", () => {
  const setTasks = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    "setItem"
  );
  const getTasks = jest.spyOn(Object.getPrototypeOf(localStorage), "getItem");

  it("Edit an Item", () => {
    addTaskToStorage("Walk");
    expect(getTasks).toHaveBeenCalled();
    expect(setTasks).toHaveBeenCalled();
    expect(editTask(0,"Run")).toBe("Run");
    expect(getTasks).toHaveBeenCalled();
    expect(setTasks).toHaveBeenCalled();
  });
});