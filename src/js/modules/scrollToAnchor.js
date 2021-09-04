const scrollToAnchor = () => {
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            console.log('test')
        }
    });
};
export default scrollToAnchor;