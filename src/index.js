import './style.css';

 function component() {
   const tasks = [
        {
            description: "Clean the room",
            completed: false,
            index: 1
        },
        {
            description: "Read Books",
            completed: false,
            index: 2
        },
    ];

    const listToDo = document.getElementById('list-toDo')
        tasks.forEach(task => {
            const list = document.createElement('div');
            list.className = 'to-do';
            list.innerHTML = `
                                <div class = "task">
                                    <input type="checkbox" ${task.completed}  />
                                    ${task.description}
                                </div>    
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            `
            listToDo.appendChild(list)
        
        })
 }

 document.body.appendChild(component());