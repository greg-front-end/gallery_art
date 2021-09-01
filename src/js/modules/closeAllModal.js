const closeAllModals = (selector) => {
    const windows = document.querySelectorAll(selector);
    
    windows.forEach(item => {
        item.classList.add('animated', 'fadeIn');
        item.classList.add('hide');
        item.classList.remove('show');
        document.body.classList.remove('modal-open');
    }); 
};

export default closeAllModals;