document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.className = "task-item";

        const taskTextElement = document.createElement("span");
        taskTextElement.className = "task-text";
        taskTextElement.textContent = taskText;

        const taskButtons = document.createElement("span");
        taskButtons.className = "task-buttons";

        const editButton = document.createElement("button");
        editButton.className = "edit-button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
            const newText = prompt("Edit the task:", taskText);
            if (newText !== null) {
                taskTextElement.textContent = newText;
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            taskItem.remove();
        });

        taskButtons.appendChild(editButton);
        taskButtons.appendChild(deleteButton);

        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(taskButtons);

        taskList.appendChild(taskItem);
        taskInput.value = "";
    });
});
