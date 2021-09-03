const changeModalState = (state) => {
    const sizePicture = document.querySelectorAll('#size'),
          materialPicture = document.querySelectorAll('#material'),
          optionsPicture = document.querySelectorAll('#options'),
          promocode = document.querySelectorAll('.promocode'),
          btn = document.querySelectorAll('.button-order'),
          sum = document.querySelectorAll('.calc-price');

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SELECT': 
                        state[prop] = item.value;
                    break;
                    case 'INPUT': 
                        state[prop] = item.value;
                    break;
                    case 'BUTTON': 
                        state[prop] = sum[0].textContent;
                        break;
                    default:
                        break;
                }
                console.log(state);
            }); 
        });
    }

    bindActionToElems('change', sizePicture, 'size');
    bindActionToElems('change', materialPicture, 'material');
    bindActionToElems('change', optionsPicture, 'options');
    bindActionToElems('input', promocode, 'promocode');
    bindActionToElems('click', btn, 'total');
};

export default changeModalState;