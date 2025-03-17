document.addEventListener('DOMContentLoaded', function () {
    const book = document.getElementById('book'); // Находим элемент книги
    const fontSizeControls = document.querySelectorAll('.font-size'); // Находим все элементы управления размером шрифта

    fontSizeControls.forEach(control => {
        control.addEventListener('click', function (event) {
            event.preventDefault();


            fontSizeControls.forEach(item => item.classList.remove('font-size_active'));


            control.classList.add('font-size_active');


            const size = control.dataset.size;

            // Убираем все классы размера шрифта у книги
            book.classList.remove('book_fs-small', 'book_fs-big');


            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });
});