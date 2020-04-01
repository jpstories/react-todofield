function getIndicator() {
    let menuLinks = document.querySelectorAll('.header__menu-elem a');
    let ind = document.querySelector('.menu__indicator');

    menuLinks.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            console.log('1');
            moveInd(e.target);
        });
    });

    const moveInd = (el) => {
        ind.style.width = `${el.offsetWidth}px`;
        ind.style.left = `${el.offsetLeft}px`;
    };
};