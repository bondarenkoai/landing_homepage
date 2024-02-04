import postImageArray from '../../images/post/post-img-arr';

const postSection = document.querySelector('.post');
const excLinks = document.querySelectorAll('.excursions__link');

// Припускаючи, що ви хочете додати розмітку, коли клікаєте на excursions__link
excLinks.forEach(link => {
    link.addEventListener('click', handleClick);
});

function handleClick(e) {
    event.preventDefault();
    // Отримуємо номер із span всередині клікнутого посилання
    const number = parseInt(e.currentTarget.querySelector('span').textContent);

    // Очищаємо вміст елементу postSection
    postSection.innerHTML = '';

    // Генеруємо розмітку за допомогою функції createMarkup
    const markup = createMarkup(number);

    // Додаємо розмітку до елементу postSection
    postSection.innerHTML += markup;

    // Отримуємо координати елемента .post
    const postElementCoordinates = postSection.getBoundingClientRect();

    // Анімаційно прокручуємо сторінку до початку елемента .post
    window.scrollTo({
        top: postElementCoordinates.top + window.scrollY, // Додаємо поточний scrollY
        behavior: 'smooth',
    });
}

function createMarkup(number) {
    const { id, src, alt, title, description } = postImageArray[number - 1]; // Коригуємо індекс, щоб відлік почався з 0

    return `
        <img class="post__img" src="${src}" alt="${alt}">
        <div class="container post__position">
            <h4 class="post__subtitle">EXCURSIONS No.${id}</h4>
            <h2 class="post__title">${title}</h2>
            <p class="post__text">${description}</p>
        </div>
    `;
}
