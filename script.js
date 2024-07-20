document.addEventListener("DOMContentLoaded", (event) => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a Task");
    } else {
      const taskLi = document.createElement("li");
      taskLi.textContent = taskText;
      const remove = document.createElement("button");
      remove.textContent = "Remove";
      remove.classList.add("remove-btn");
      remove.onclick = function () {
        taskLi.remove();
      };
      taskLi.appendChild(remove);
      taskList.appendChild(taskLi);
    }
  }
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  document.addEventListener("DOMContentLoaded", addTask);
});
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
}
function addTask(taskText, save = true) {
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}