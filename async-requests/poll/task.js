let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const pollTittle = document.getElementById('poll__title');
        const pollAnswer = document.getElementById('poll__answers');

        pollTittle.innerText = data.data.title;
        data.data.answers.forEach(answer => {
            const button = document.createElement("button");
            button.className = 'poll__answer';
            button.innerText = answer;
            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос защитан!')
            })
            pollAnswer.appendChild(button);
        })
    }


}


xhr.send();