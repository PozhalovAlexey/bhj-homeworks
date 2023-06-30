let counter = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie')
let speedClick = document.getElementById('speed__click')
let firstTimeClick = null;
let clickSpeed = null;

cookie.onclick = function () {
    counter.textContent++
    if (firstTimeClick !== null) {
        let currentTime = new Date();
        let diff = currentTime - firstTimeClick;
        clickSpeed = 1000 / diff;
        speedClick.textContent = clickSpeed.toFixed(2)
    }
    if (cookie.width === 230) {
        cookie.width -= 30;
        cookie.height -= 30
    } else {
        cookie.width += 30;
        cookie.height += 30;
    }
    firstTimeClick = new Date()
}