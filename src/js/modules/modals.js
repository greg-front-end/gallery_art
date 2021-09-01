import closeAllModals from "./closeAllModal";
import getScrollbarSize from "./getScrollBarSize";

const modals = () => {
    let btnPressed = false;
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            rightScroll = getScrollbarSize();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if (destroy) {
                    item.remove();
                }

                btnPressed = true;

                // close all modal window
                closeAllModals('[data-modal]');
    
                modal.classList.add('show', 'fadeIn');
                modal.classList.remove('hide',);
                // document.body.style.overflow = 'hidden';
                document.body.classList.add('modal-open');

                document.body.style.marginRight = `${rightScroll}px`;
            });
        });

        close.addEventListener('click', () => {
            // close all modal window
            closeAllModals('[data-modal]');

            modal.classList.add('hide');
            modal.classList.remove('show', 'fadeIn');
            // document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                // close all modal window
                closeAllModals('[data-modal]');
                modal.classList.add('hide');
                modal.classList.remove('show');
                // document.body.style.overflow = '';
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
            }
        });
    }

    // open modal through 60sec
    function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.classList.add('modal-open');
                let rightScroll = getScrollbarSize();
                document.body.style.marginRight = `${rightScroll}px`;
            }            

        }, time);
    }

    function openByScroll (selector) {
        window.addEventListener('scroll', () => {
            // Get maxHeight for old browsers
            let scrollHeightMax = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeightMax)) {
                document.querySelector(selector).click();
            }
        });
    }
    
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    // showModalByTime('.popup-consultation', 3000);
};

export default modals;