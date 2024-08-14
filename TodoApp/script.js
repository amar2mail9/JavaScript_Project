let addBtn = document.getElementById("add-btn");
let container2 = document.getElementById("container2");
// let closedBtn = document.getElementById("closed-btn");

function del(e) {
  let task = e.parentElement.parentElement;
  task.remove();
}

addBtn.onclick = () => {
  let inputTask = document.getElementById("todo-input");
  if (inputTask.value === "") {
    container2.style.display = "flex";
  } else {
    let newTask = document.createElement("li");
    newTask.innerHTML = `<span id="task">${inputTask.value.trim()}</span> <button id='del-btn' onclick='del(this)'>Del</button>`;
    let taskList = document.getElementById("task-list");
    taskList.appendChild(newTask);
    inputTask.value = "";
  }
};

function closed() {
  container2.style.display = "none";
}
container2.addEventListener("click", closed);
