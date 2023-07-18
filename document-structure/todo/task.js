const form = document.querySelector('#tasks__form');
const input = document.querySelector('#task__input');
const taskList = document.querySelector('#tasks__list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const addTask = (title) => {
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
    <div class="task__title">${title}</div>
    <a href="#" class="task__remove">&times;</a>
    `
    taskList.appendChild(task)
    const removeButton = task.querySelector('.task__remove');
    removeButton.addEventListener('click', () => {
        removeTask(task)
    })
    tasks.push(title);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const removeTask = (task) => {
    task.remove();
    const title = task.querySelector('.tasks__title').textContent;
    tasks = tasks.filter(task => task !== title)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
form.addEventListener('click', (e) => {
    e.preventDefault()
    const title = input.value.trim();
    if (title) {
        addTask(title);
        input.value = '';
    }
})
tasks.forEach(title => addTask(title));