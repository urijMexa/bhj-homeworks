document.addEventListener('DOMContentLoaded', () => {

    const dropdowns = document.querySelectorAll('.dropdown');


    dropdowns.forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');


        value.addEventListener('click', () => {
            list.classList.toggle('dropdown__list_active');
        });


        list.addEventListener('click', (event) => {
            event.preventDefault();


            if (event.target.classList.contains('dropdown__link')) {
                value.textContent = event.target.textContent;
                list.classList.remove('dropdown__list_active');
            }
        });
    });
});