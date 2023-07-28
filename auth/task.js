const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

window.addEventListener('load', () => {
    const userIdLS = localStorage.getItem('userId');
    if (userIdLS) {
        userId.textContent = userIdLS;
        welcome.classList.add('welcome_active');
    }
})

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signinForm);
    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => console.log(data))
})
