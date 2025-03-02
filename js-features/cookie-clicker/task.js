
const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');


let clickCount = 0;


let lastClickTime = Date.now();


const speedElement = document.createElement('div');
speedElement.textContent = 'Скорость клика: 0 кликов/сек';
document.querySelector('.clicker').appendChild(speedElement);


cookie.onclick = function () {
    // Увеличиваем счетчик кликов
    clickCount++;
    clickCounter.textContent = clickCount;


    if (cookie.width === 200) {
        cookie.width = 180;
        cookie.height = 180;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }


    const currentTime = Date.now();
    const timeDiff = (currentTime - lastClickTime) / 1000;
    const clicksPerSecond = (1 / timeDiff).toFixed(2);
    speedElement.textContent = `Скорость клика: ${clicksPerSecond} кликов/сек`;


    lastClickTime = currentTime;
};