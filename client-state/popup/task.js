const modalWindow = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close_times');
modalWindow.classList.add('modal_active')

closeBtn.addEventListener('click', () => {
    modalWindow.classList.remove('modal_active')
    document.cookie = 'isModalClosed=true'
})

window.addEventListener('click', () => {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        if (name.trim() === 'isModalClosed' && value.trim() === true) {
            modalWindow.classList.remove('modal_active')
        }
    })
})
