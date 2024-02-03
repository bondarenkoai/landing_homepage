import img from './bg-17.webp';
import imgjson from './test.json';
import bgImageArray from '../images/bg-img/bg-img-arr';

console.log(bgImageArray);

const test = document.querySelector('.test');

function addImageFromJSON() {
    // Створюємо img елемент для кожного об'єкта в масиві arr
    bgImageArray.forEach(imageObject => {
        const imgElement = document.createElement('img');
        imgElement.src = imageObject.src;
        imgElement.alt = imageObject.alt;

        // Додавання атрибута crossorigin
        imgElement.setAttribute('crossorigin', 'anonymous');

        // Додаємо img елемент в тестовий елемент
        test.appendChild(imgElement);
    });
}

addImageFromJSON();
