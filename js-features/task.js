const counterElement = document.getElementById('dead')
const missElement = document.getElementById('lost')
let counter = 0;
let missCounter = 0;

const holes = document.getElementsByClassName('hole')

Array.from(holes).forEach(function (hole) {
    hole.addEventListener('click', function () {
        if (hole.classList.contains('hole_has-mole')) {
            counter++;
            counterElement.textContent = counter;
            if (counter === 10) {
                alert('Поздравляем! Вы выиграли!')
                counter = 0;
                missCounter = 0;
                counterElement.textContent = counter;
                missElement.textContent = missCounter;
            }
        } else {
            missCounter++;
            missElement.textContent = missCounter;
            if (missCounter === 5) {
                alert('Вы проиграли(((');
                counter = 0;
                missCounter = 0;
                counterElement.textContent = counter;
                missElement.textContent = missCounter;
            }
        }
    })
})





