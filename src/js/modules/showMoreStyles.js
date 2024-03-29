import {getResourse} from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', function() {
        getResourse('assets/db.json') // from json-server -> http://localhost:3000/styles
            .then(res => createCards(res.styles)) // if from json-server need write just res withot styles
            .catch(error => console.log('Error'));

        this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            
            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }

};
export default showMoreStyles;