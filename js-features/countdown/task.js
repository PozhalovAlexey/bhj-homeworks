let timer = document.getElementById('timer');

let timeLeft = parseInt(timer.textContent);
let intervalId = setInterval(function () {
    let h = Math.floor(timeLeft / 3600);
    let m = Math.floor((timeLeft - (h * 3600)) / 60);
    let s = timeLeft - (h * 3600) - (m * 60)

    timer.textContent = ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2)
        + ':' + ('0' + s).slice(-2);
    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(intervalId)
        alert('Вы победили в конкурсе')
    }
}, 1000)
