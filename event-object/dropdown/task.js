const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__item');

value.addEventListener('click', () => {
    if (list.classList.contains('dropdown__list_active')) {
        list.classList.remove('dropdown__list_active')
    } else {
        list.classList.add('dropdown__list_active')
    }
})
items.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        list.classList.remove('dropdown__list_active')
        value.textContent = item.querySelector('.dropdown__link').textContent
    })
})