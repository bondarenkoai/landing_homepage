import bgImageArray from '../images/bg-img/bg-img-arr';

const firstNumber = document.querySelector('.first-number');
const secondNumber = document.querySelector('.second-number');
const firstNumberText = document.querySelector('.first-number__text');

// Посилання на зображення в фоні
const headerBgImage = document.querySelector('.header-bgimage');
const arr = bgImageArray;
let currentIndex = 0;

console.log(bgImageArray);
console.log(bgImageArray[0].src);

function changeHeaderBgImage(index) {
    headerBgImage.style.background = `url('${arr[index].src}')`;
    headerBgImage.style.backgroundSize = 'cover';
    headerBgImage.style.backgroundPosition = 'center';
}

// Викликаємо функцію для зміни фонового зображення
changeHeaderBgImage(0);

function handleClick() {
    // Перевіряємо, який елемент був натисканий
    if (this === firstNumber) {
        // Кнопка "назад"
        currentIndex = (currentIndex - 1 + arr.length) % arr.length;
    } else if (this === secondNumber) {
        // Кнопка "вперед"
        currentIndex = (currentIndex + 1) % arr.length;
    }

    // Змінюємо зображення в фоні та оновлюємо цифру
    changeHeaderBgImage(currentIndex);
    firstNumberText.textContent = String(currentIndex + 1).padStart(2, '0');
}

// Додаємо обробник кліку для обох номерів
firstNumber.addEventListener('click', handleClick);
secondNumber.addEventListener('click', handleClick);
