const drop = () => {
    // drag * working with elements on browser
    // dragend * working with elements on browser
    // dragenter - objetc under dropArea
    // dragexit * working with elements on browser
    // dragleave - object go out dropArea
    // dragover - object lopp to dropArea
    // dragstart * working with elements on browser
    // drop - object  droped in dropArea
    // for drop a few photos need in input attribute wrtie multiple
    // if we want drop only photos in input wrate accept="imgae/*"
    // the function doesn't support in older browsers
    // sometimes need upload and install as a logo, then with fetch we can do it
    //todo send the photo without submit//

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.background = 'rgba(0,0,0, .7)';
    }
    function unHighlight(item) {
        item.closest('.file_upload').style.border = 'none';
        item.closest('.file_upload').style.background = 'inherit';
        // if (item.closest('.calc_form')) {
        //     item.closest('.file_upload').style.background = '#fff';
        // } else {
        //     item.closest('.file_upload').style.background = '#ededed';
        // }
    }

    ['dragenter','dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave','drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;

            let dots;
            const arr = input.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });

};
export default drop;