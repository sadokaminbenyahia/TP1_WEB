
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


function addTask() {
    if (taskInput.value.trim()) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" onchange="toggleTask(this)">
            <span>${taskInput.value}</span>
            <button class="delete-btn" onclick="deleteTask(this)">X</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}


function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    taskText.classList.toggle('completed');
}


function deleteTask(button) {
    button.parentElement.remove();
}


addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
