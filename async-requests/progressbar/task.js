const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')


    xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
            progress.value = (e.loaded / e.total) * 100;
        }
    })
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('Файл загрузился корректно.');
            } else {
                console.error('Ошибка при загрузке файла.')
            }
        }
    }
    const formData = new FormData(form);
    xhr.send(formData)
})






