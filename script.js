function addTask() {
  const taskInput = document.getElementById("task");
  const list = document.getElementById("list");

  if (taskInput.value === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;
  list.appendChild(li);

  taskInput.value = "";
}
