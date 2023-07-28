const editor = document.getElementById('editor');
const saveButton = document.getElementById('btn');
const clearButton = document.getElementById('clear__btn');

window.addEventListener('load', () => {
    const savedText = localStorage.getItem('editorText');
    if (savedText) {
        editor.value = savedText
    }
})

saveButton.addEventListener('click', () => {
    const toSave = editor.value;
    localStorage.setItem('editorText', toSave);
    alert('Текст сохранен в local storage.')
})

clearButton.addEventListener('click', () => {
    editor.value = '';
})