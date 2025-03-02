
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');


let dead = 0;
let lost = 0;


function handleHoleClick(event) {
    const hole = event.target;


    if (hole.classList.contains('hole_has-mole')) {
        dead++;
        deadCounter.textContent = dead;
    } else {
        lost++;
        lostCounter.textContent = lost;
    }


    if (dead === 10) {
        alert('Победа! Вы убили 10 кротов.');
        resetGame();
    } else if (lost === 5) {
        alert('Поражение! Вы совершили 5 промахов.');
        resetGame();
    }
}


function resetGame() {
    dead = 0;
    lost = 0;
    deadCounter.textContent = dead;
    lostCounter.textContent = lost;
}


const holes = document.querySelectorAll('.hole');
holes.forEach(hole => {
    hole.addEventListener('click', handleHoleClick);
});