const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function renderTasks() {
    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(task => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
    });

    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.classList.add("task-item");

        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">
                ${task.text}
            </span>

            <div class="actions">
                <button class="complete-btn" data-id="${task.id}">
                    ${task.completed ? "Undo" : "Done"}
                </button>

                <button class="edit-btn" data-id="${task.id}">
                    Edit
                </button>

                <button class="delete-btn" data-id="${task.id}">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();

    if (!text) {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        id: Date.now(),
        text: text,
        completed: false
    });

    taskInput.value = "";
    saveTasks();
    renderTasks();
});

taskList.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id);

    if (e.target.classList.contains("delete-btn")) {
        tasks = tasks.filter(task => task.id !== id);
    }
    if (e.target.classList.contains("complete-btn")) {
        const task = tasks.find(task => task.id === id);
        task.completed = !task.completed;
    }

    if (e.target.classList.contains("edit-btn")) {
        const task = tasks.find(task => task.id === id);

        const updatedText = prompt("Edit Task", task.text);

        if (updatedText && updatedText.trim() !== "") {
            task.text = updatedText.trim();
        }
    }

    saveTasks();
    renderTasks();
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");
        currentFilter = button.dataset.filter;

        renderTasks();
    });
});

renderTasks();