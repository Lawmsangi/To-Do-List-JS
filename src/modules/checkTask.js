const { getTask, savedTask } = require("./storage")

const checkTask = (index) => {
    const tasks = getTask();
    
        if(tasks[index].completed === false) {
            tasks[index].completed = true;
        }
        else {
            tasks[index].completed = false;
        }
   
    savedTask(tasks)
}




module.exports = checkTask;