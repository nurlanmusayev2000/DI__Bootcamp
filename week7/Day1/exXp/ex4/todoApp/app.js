let TodoList = require('./todo.js');

const todoList = new TodoList();
todoList.addTask("Task 1");
todoList.addTask("Task 2");
todoList.addTask("Task 3");

todoList.markAsComplete(1);

todoList.listAllTasks();