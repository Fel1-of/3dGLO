'use strict';
const validation = () => {
    const form = document.querySelectorAll('input');
    form.forEach((element) => {
        if (element.matches('.form-email')) {
            element.addEventListener('blur', () => {
                { //replace(/[а-яА-ЯёЁ]|^[ -]*|( |-)(?=\1)|[ -]*$/g, '')
                    element.classList.add('succses');
                    element.value = element.value.match(/\w+@\w+\.\w{2,3}/g);
                    if (!element.value) {
                        element.classList.remove('succses');
                    }
                }
            });
        } else if (element.matches('.form-phone')) {
            element.addEventListener('blur', () => {
                {
                    element.value = element.value.match(/\+?[78]([-()]*\d){10}/g);

                }
            });
        } else if (element.matches('.top-form') || element.matches('.form-name') || element.matches('.mess')) {
            element.addEventListener('blur', () => {
                {
                    element.value = element.value.replace(/[^а-яА-ЯёЁ\s\-]|^[ -]*|( |-)(?=\1)|[ -]*$/g, '');
                    element.value = element.value.slice(0, 1).toUpperCase() + element.value.slice(1, element.value.length);
                }
            });
        } else if (element.matches('.calc-item') && !element.matches('.calc-type')) {
            element.addEventListener('blur', () => {
                {
                    element.value = element.value.replace(/\D/g, '');

                }
            });
        }

    });
};

export default validation;