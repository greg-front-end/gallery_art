const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
          blocks = document.querySelectorAll(itemsSelector);
    
    // solution throw js
    function hideContent() {
        btns.forEach(btn => {
            btn.classList.remove('active-style');
        });
        blocks.forEach(block => {
            block.classList.remove('active-content');
            block.style.maxHeight = null;
        });
    }
    function showContent(obj, i = 0) {
        hideContent();
        btns[i].classList.add('active-style');
        blocks[i].classList.add('active-content');
        blocks[i].style.maxHeight = obj.scrollHeight + 80 + 'px';
    }

    btns.forEach((btn, i) => {
        btn.addEventListener('click', function () {

            if (this.nextElementSibling.style.maxHeight) {
                hideContent();
            } else {
                showContent(this.nextElementSibling, i);
            }

            
            /*if need open every tabs */
            // this.classList.toggle('active-style');
            // this.nextElementSibling.classList.toggle('active-content');

            // if (this.classList.contains('active-style')) {
            //     this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            // } else {
            //     this.nextElementSibling.style.maxHeight = '0px';
            // }
        });
    });

    // solution trhow css styles

    // blocks.forEach(block => {
    //     block.classList.add('animated','fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};
export default accordion;