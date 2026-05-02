let toDoList = [];

function addTask(task) {
  toDoList.push(task);
  console.log("New Task added!");
}

function viewTasks() {
  toDoList.forEach((task) => {
    console.log(toDoList.indexOf(task), task);
  });
}

function deleteTask(ind) {
  if (ind >= 0 && ind < toDoList.length) {
    toDoList.splice(ind, 1);
  }
}

addTask("Study ATCD");
addTask("Study DAA");
addTask("Study CC");
addTask("Study WT");
addTask("Study ML");

viewTasks();

deleteTask(2);

viewTasks();
