const changeNavLinkColor = window.addEventListener('scroll', function () {
    // Визначте позицію верхньої межі наступної секції відносно верху сторінки
    const nextSectionTop = document.querySelector('.land').offsetTop;
    const logoText = document.querySelector('.logo__text');
    const navLink = document.querySelectorAll('.site-nav__link');

    // Порівнюємо величину прокрутки з позицією верхньої межі наступної секції
    if (window.scrollY >= nextSectionTop) {
        // Коли прокрутка перевищила верхню межу наступної секції
        navLink.forEach(function (link) {
            link.classList.add('change-color');
            logoText.style.color = '#ffffff';
        });
    } else {
        // Коли прокрутка ще не перевищила верхню межу наступної секції
        navLink.forEach(function (link) {
            link.classList.remove('change-color');
            logoText.style.color = '#000000';
        });
    }
});

export { changeNavLinkColor };
