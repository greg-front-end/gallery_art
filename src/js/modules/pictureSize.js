const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg(block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -4) + '-1.png';
        img.classList.add('animated', 'fadeIn');
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hiddenImg(block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -6) + '.png';
        img.classList.remove('animated', 'fadeIn');
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
    });

    blocks.forEach(block => {
        block.addEventListener('mouseout', () => {
            hiddenImg(block);
        });
    });
};
export default pictureSize;