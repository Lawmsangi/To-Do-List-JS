const {getTask} = require("./storage");

const checkUI = (checkbox,index,span) => {
    const tasks = getTask();
        if(tasks[index].completed === true) {
            checkbox.checked = true;
            span.style.textDecoration = 'line-through';
           checkbox.parentElement.classList.add = 'clear-all';
        }
        else {
            checkbox.checked = false;
            span.style.textDecoration = 'none';
        }
}

module.exports = checkUI;