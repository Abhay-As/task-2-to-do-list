document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-task').addEventListener('click', function () {
        const taskInput = document.getElementById('tasks');
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskList = document.getElementById('task-list');
            const taskItem = document.createElement('li');

            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="completeBtn">complete</button>
                <button class="removeBtn">clear</button>
            `;

            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    // Event delegation for complete & delete
    document.getElementById('task-list').addEventListener('click', function (e) {
        if (e.target.classList.contains('completeBtn')) {
            e.target.parentElement.classList.toggle('completed');
        } else if (e.target.classList.contains('removeBtn')) {
            e.target.parentElement.remove();
        }
    });
});