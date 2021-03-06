'use strict';
const sendForm = (selector) => {

    const errorMessage = 'Что-то пошло не так',
        //loadMessage = 'Загрузка...',
        successMessage = 'Заявка была отправлена';

    const form = document.getElementById(selector);

    const buttons = document.querySelectorAll('button[type=submit]');
    const bNum = selector[4] - 1;
    buttons.forEach(e => e.setAttribute("disabled", "disabled"));
    document.querySelectorAll('input').forEach(e => e.addEventListener('input', () => {
        let valid = 0;
        for (let val of new FormData(form).entries()) {
            if (val[1] === '') {
                valid += 1;
            }
        }
        if (valid) {

            buttons[bNum].setAttribute('disabled', "disabled");
        } else {
            buttons[bNum].removeAttribute('disabled');
        }

    }));
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
    //statusMessage.textContent = 'Тут будет сообщение';

    form.addEventListener('submit', (event) => {



        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = '';
        statusMessage.classList.add('sk-pulse');
        statusMessage.style.cssText = 'margin: auto';
        


        const formData = new FormData(form);
        let body = {};

        for (let value of formData.entries()) {
            body[value[0]] = value[1];
        }
        fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).then((response) => {
                if (response.status !== 200) {
                    throw new Error(`Что-то пошло не так, код ошибки - ${response.status}`);
                }
                
                statusMessage.textContent = successMessage;
                statusMessage.style.color = "#FFFFFF";
                updatePage();
            })
            .catch((error) => {
                console.log(error);
                statusMessage.textContent = errorMessage;
                updatePage();
            });
    });

    const updatePage = () => {
        clearInputs(form);
        statusMessage.classList.remove('sk-pulse');
        statusMessage.style.cssText = '';
        buttons[bNum].setAttribute('disabled', 'disabled');
        setTimeout(() => {
            statusMessage.textContent = '';
        }, 3000);
        if (selector === "form3") {
            setTimeout(() => {
                document.querySelector('.popup').style.display = 'none';
            }, 2000);
        }
    };
    const clearInputs = (form) => {
        const inputs = form.querySelectorAll('input');

        inputs.forEach(item => item.value = '');
    };
};

export default sendForm;