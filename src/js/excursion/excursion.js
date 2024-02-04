import excursionImageArray from '../../images/exc/excursion-img-arr';

// console.log('done');
// const excContent = document.querySelector('.excursions__content');

// console.log(excContent);

const imageElement = document.querySelector('.excursions__img');
const excLinks = document.querySelectorAll('.excursions__link');
let currentIndex = 0;

function changeExcursionImage(index) {
    imageElement.style.backgroundImage = `url('${excursionImageArray[index].src}')`;
    imageElement.style.backgroundSize = 'cover';
    imageElement.style.backgroundPosition = 'center';
    imageElement.style.transition = 'background-image 0.63s ease-in';
    imageElement.style.border = '0';
}

function getRandomNumber() {
    const randomFraction = Math.random();
    const randomNumber = Math.floor(randomFraction * 5) + 1;
    return randomNumber;
}

changeExcursionImage(getRandomNumber());

function handleHover(e) {
    // Отримуємо номер з елемента <a>
    const number = parseInt(e.currentTarget.querySelector('span').textContent);

    // Змінюємо зображення в фоні
    currentIndex = number - 1;
    changeExcursionImage(currentIndex);
}

// Додаємо обробник для кожного елемента <a>
excLinks.forEach(link => {
    link.addEventListener('mouseenter', handleHover);
    link.addEventListener('mouseleave', () => {});
});
