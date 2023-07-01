const counterElement = document.getElementById('dead')
const missElement = document.getElementById('lost')
let counter = 0;
let missCounter = 0;

const holes = document.getElementsByClassName('hole')

function resetGameStats(){
    counter = 0;
    missCounter = 0;
    counterElement.textContent = counter;
    missElement.textContent = missCounter;
}

function endGameAlert(message){
resetGameStats();
alert(message)
}

Array.from(holes).forEach(function (hole) {
    hole.addEventListener('click', function () {
        if (hole.classList.contains('hole_has-mole')) {
            counter++;
            counterElement.textContent = counter;
            if (counter === 10) {
                endGameAlert('Поздравляем! Вы выиграли!')
            }
        } else {
            missCounter++;
            missElement.textContent = missCounter;
            if (missCounter === 5) {
                endGameAlert('Вы проиграли(((');
            }
        }
    })
})





