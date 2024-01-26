// Отримуємо всі елементи з класом "site-nav__link"
const navLinks = document.querySelectorAll('.site-nav__link');

// Додаємо обробник кліка для кожного посилання
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Знімаємо клас "active" у всіх елементів
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        // Додаємо клас "active" до клікнутого елемента
        link.classList.add('active');
    });
});
