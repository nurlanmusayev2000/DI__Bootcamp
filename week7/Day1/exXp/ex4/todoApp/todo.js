class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task: task, complete: false });
    }

    markAsComplete(taskIndex) {
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            this.tasks[taskIndex].complete = true;
        } else {
            console.log("Invalid task index.");
        }
    }

    listAllTasks() {
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.complete ? '[X]' : '[ ]'} ${task.task}`);
        });
    }
}

module.export = TodoList