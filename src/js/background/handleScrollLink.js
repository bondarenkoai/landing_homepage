window.addEventListener('scroll', handleScrollLink);

function handleScrollLink() {
    handleScrollHome();
    handleScrollExcursions();
}

function handleScrollHome() {
    const nextSectionTop = document.querySelector('.excursions').offsetTop;
    const homeNavLink = document.querySelector('#home');
    homeNavLink.classList.toggle('active', window.scrollY < nextSectionTop);
}

function handleScrollExcursions() {
    const nextSectionTop = document.querySelector('.excursions').offsetTop;
    const excursionsNavLink = document.querySelector(
        '.site-nav__link[href="#excursions"]'
    );
    if (window.scrollY >= nextSectionTop) {
        excursionsNavLink.classList.add('active');
    } else {
        excursionsNavLink.classList.remove('active');
    }
}

export default handleScrollLink;
