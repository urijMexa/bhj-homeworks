document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');

    function checkVisibility() {
        reveals.forEach(element => {
            if (element.classList.contains('reveal_active')) {
                return;
            }
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('reveal_active');
            }
        });
    }

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});