// import checkNumInputs from "./checkNumInputs";
import closeAllModals from "./closeAllModal";
import {postData} from "../services/requests";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');
    
    // module for check inputs with value of number
    // checkNumInputs('input[name="user_phone"]');

    // Object from message for statusDiv
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжимся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };
    
    // clear all inputs after form sends
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            // console.log(item.files[0]);

            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            // create html div for show status after form sends
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);
            
            // if dataAttribute has prop(end) we append the key and value to formData
            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'calc') {
                console.log(state);
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            let api;
            
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question; 
            console.log(api);

            // in the end step of the quiz clear modalState
            const clearModalState = (obj) => {
                for (let prop of Object.getOwnPropertyNames(obj)) {
                    delete obj[prop];
                }
            };

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    textMessage.textContent = message.failure;
                    statusImg.setAttribute('src', message.fail);
                })
                .finally(() => {
                    clearInputs();
                    
                    clearModalState(state);
                    closeAllModals('[data-modal');
                    setTimeout(function() {
                        form.forEach(item => item.reset());
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });

        });
    });
};

export default forms;