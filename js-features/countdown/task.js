
let totalSeconds = 3600; // Пример: 1 час


function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;


    return [
        String(hours).padStart(2, '0'),
        String(minutes).padStart(2, '0'),
        String(secs).padStart(2, '0')
    ].join(':');
}

// Функция для обновления таймера
function updateTimer() {
    const timerElement = document.getElementById('timer');

    if (totalSeconds > 0) {
        timerElement.textContent = formatTime(totalSeconds);
        totalSeconds--;
    } else {
        clearInterval(intervalId);
        timerElement.textContent = "00:00:00";
        alert('Время вышло! Загрузка файла...');

        // Запуск загрузки файла
        downloadFile('https://example.com/path/to/your/file.zip');
    }
}


function downloadFile(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = true;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


const intervalId = setInterval(updateTimer, 1000); // Обновляем каждую секунду