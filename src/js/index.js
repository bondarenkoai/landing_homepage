// // import headerBgImagesArray from '../json/background.json';

// // const headerBgImage = document.querySelector('.header-bgimage');
// // const firstNumber = document.querySelector('.first-number');
// // const secondNumber = document.querySelector('.second-number');
// // const arr = headerBgImagesArray.bgImages;

// // function changeHeaderBgImage(arr) {

// // }

// // console.log(headerBgImagesArray.bgImages);
// // console.log(headerBgImage);
// // console.log(firstNumber, secondNumber);
// // console.log(firstNumber, firstNumber.textContent);

// import headerBgImagesArray from '../json/background.json';

// const firstNumber = document.querySelector('.first-number');
// const secondNumber = document.querySelector('.second-number');
// // Посилання на зображення в фоні
// const headerBgImage = document.querySelector('.header-bgimage');
// const arr = headerBgImagesArray.bgImages;
// let currentIndex = 0;

// function changeHeaderBgImage(index) {
//     // Змінюємо зображення в фоні згідно індексу
//     headerBgImage.style.background = `url('${arr[index].src}')`;
// }

// // Видаляємо inline-стиль, якщо він встановлений
// headerBgImage.style.backgroundImage = '';

// // Викликаємо функцію для зміни фонового зображення
// changeHeaderBgImage(0);

// // Обробник кліку на елемент з номером
// function handleClick() {
//     // Отримуємо номер з тексту елемента, який був натисканий
//     const number = this.textContent.trim();

//     // Перевіряємо, який елемент був натисканий і викликаємо відповідну функцію
//     if (number === '01') {
//         // Перевіряємо, чи індекс не виходить за межі масиву
//         currentIndex = (currentIndex - 1 + arr.length) % arr.length;
//         changeHeaderBgImage(currentIndex);
//     } else if (number === '17') {
//         // Перевіряємо, чи індекс не виходить за межі масиву
//         currentIndex = (currentIndex + 1) % arr.length;
//         changeHeaderBgImage(currentIndex);
//     }
// }

// // Додаємо обробник кліку для обох номерів
// firstNumber.addEventListener('click', handleClick);
// secondNumber.addEventListener('click', handleClick);
