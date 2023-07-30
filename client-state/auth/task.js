const signinForm = document.getElementById('signin__form');
const form = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signinForm);
    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
                if (data.success === true) {
                    localStorage.setItem('userId', data.user_id)
                    userId.textContent = data.user_id;
                    welcome.classList.add('welcome_active')
                } else {
                    alert('Неверный логин/пароль')
                }
                userId.textContent = localStorage.getItem('userId');
                form.classList.remove('signin_active')
            }
        )
    formData.reset()
})