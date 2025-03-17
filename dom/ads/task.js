document.addEventListener('DOMContentLoaded', function () {
    const rotators = document.querySelectorAll('.rotator'); // Находим все ротаторы

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case'); // Находим все элементы внутри ротатора
        let currentIndex = 0; // Индекс текущего активного элемента

        function rotate() {
            // Убираем активный класс у текущего элемента
            cases[currentIndex].classList.remove('rotator__case_active');

            // Переходим к следующему элементу (или к первому, если достигли конца)
            currentIndex = (currentIndex + 1) % cases.length;

            // Добавляем активный класс новому элементу
            cases[currentIndex].classList.add('rotator__case_active');

            // Получаем скорость смены из data-атрибута (если есть)
            const speed = cases[currentIndex].dataset.speed || 1000;

            // Устанавливаем цвет текста из data-атрибута (если есть)
            const color = cases[currentIndex].dataset.color || 'black';
            cases[currentIndex].style.color = color;

            // Запускаем следующий цикл смены
            setTimeout(rotate, speed);
        }

        // Запускаем первый цикл смены
        rotate();
    });
});