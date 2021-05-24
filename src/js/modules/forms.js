import {numberValidation} from './inputValidation';
import {closeAllModal} from './modal';

const forms = (formSelector, state) => {
    const form = document.querySelectorAll(formSelector),
          inputs = document.querySelectorAll('input');

    numberValidation('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
        
            const formData = new FormData(item);

            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
            }).catch(() => {
                statusMessage.textContent = message.failure;
            }).finally(() => {
                clearInputs();
                for (let value in state) {
                    delete state[value];
                }
                setTimeout(() => {
                    statusMessage.remove();
                    closeAllModal();
                }, 3000);
            });
        });
    });
};

export default forms;