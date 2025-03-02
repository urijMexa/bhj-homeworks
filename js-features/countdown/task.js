// Начальное время в секундах (например, 1 час = 3600 секунд)
let totalSeconds = 3600; // Пример: 1 час

// Функция для форматирования времени в hh:mm:ss
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    // Добавляем ведущие нули, если число меньше 10
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
        clearInterval(intervalId); // Останавливаем таймер
        timerElement.textContent = "00:00:00";
        alert('Время вышло! Загрузка файла...');

        // Запуск загрузки файла
        downloadFile('https://example.com/path/to/your/file.zip');
    }
}

// Функция для загрузки файла
function downloadFile(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = true; // Указываем, что файл нужно скачать
    link.target = '_blank'; // Открываем в новой вкладке (для старых браузеров)
    document.body.appendChild(link); // Добавляем ссылку в DOM
    link.click(); // Программно кликаем по ссылке
    document.body.removeChild(link); // Удаляем ссылку из DOM
}

// Запуск таймера
const intervalId = setInterval(updateTimer, 1000); // Обновляем каждую секунду