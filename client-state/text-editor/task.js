const editor = document.getElementById('editor');
const saveButton = document.getElementById('btn');
const clearButton = document.getElementById('clear__btn');

window.addEventListener('load', () => {
    editor.value = localStorage.getItem('editorText');
})

saveButton.addEventListener('click', () => {
    const toSave = editor.value;
    localStorage.setItem('editorText', toSave);
    alert('Текст сохранен в local storage.')
})

clearButton.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('editorText');
})