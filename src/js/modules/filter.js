const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = document.querySelectorAll('li'),
          blocks = document.querySelectorAll('.portfolio-block'),
          no = document.querySelector('.portfolio-no');

    const showByClass = (items, cls, trg) => {
        items.forEach(item => {
            for (let i = 0; i < cls.length; i++) {

                if (trg && trg.classList.contains(cls[i]) === item.classList.contains(cls[i])) {
                    item.style.display = 'block';
                    item.classList.add('active', 'animated', 'fadeIn');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('active', 'animated', 'fadeIn');
                }
            }
            
        });
    };

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }

        let cls = target.classList;
        console.log(cls[1])
        if (target && target.classList.contains('noItem')) {
            no.style.display = 'block';
            no.classList.add('active', 'animated', 'fadeIn');
        } else {
            no.style.display = 'none';
            no.classList.remove('active', 'animated', 'fadeIn');
        }

        showByClass(blocks, cls, target);
    });
};
export default filter;