import arr from '../../images/video/blogVideoArr';

console.log(arr);

function getRandomNumber() {
    const randomFraction = Math.random();
    const randomNumber = Math.floor(randomFraction * arr.length);
    return randomNumber;
}

const carousel = document.querySelector('.carousel');
const yearsList = document.querySelectorAll('.blog__years .years__item');

let currentIndex = getRandomNumber();

function createMarkup(number) {
    const prevIndex = (number - 1 + arr.length) % arr.length;
    const currentIndex = number;
    const nextIndex = (number + 1) % arr.length;

    const prevVideo = arr[prevIndex];
    const currentVideo = arr[currentIndex];
    const nextVideo = arr[nextIndex];

    return `
        <div class="carousel__item">
            <video class="carousel__video" src="${prevVideo.src}" loop muted height="100%"></video>
        </div>
        <div class="carousel__item active">
            <video class="carousel__video active" src="${currentVideo.src}" autoplay loop muted height="100%"></video>
            <div class="carousel__caption">
                <h3 class="carousel__description">${currentVideo.description}</h3>
                <p class="carousel__place">${currentVideo.place}</p>
            </div>
        </div>
        <div class="carousel__item">
            <video class="carousel__video" src="${nextVideo.src}" loop muted height="100%"></video>
        </div>
    `;
}

function updateYearsClass() {
    yearsList.forEach((year, index) => {
        if (index === currentIndex) {
            year.classList.add('active');
        } else {
            year.classList.remove('active');
        }
    });
}

function changeCurrentVideo(direction) {
    currentIndex = (currentIndex + direction + arr.length) % arr.length;
    updateCarouselMarkup();
    updateYearsClass();
}

// Додаємо слухачі подій
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');
btnNext.addEventListener('click', () => changeCurrentVideo(1));
btnPrev.addEventListener('click', () => changeCurrentVideo(-1));

function updateCarouselMarkup() {
    carousel.innerHTML = createMarkup(currentIndex);
}

// Ініціалізація при завантаженні сторінки
updateCarouselMarkup();
updateYearsClass();

const volumeSlider = document.getElementById('volume-slider');
volumeSlider.addEventListener('input', handleVolumeChange);

function handleVolumeChange() {
    const volumeValue = volumeSlider.value / 100; // Перетворюємо значення зі слайдера у відсотки
    const activeVideo = document.querySelector('.carousel__item.active video');
    activeVideo.volume = volumeValue;
}

// document.querySelector('#next').addEventListener('click', e => {
//     console.log(e.target);
//     console.log(e.currentTarget);
// });
// document.querySelector('#prev').addEventListener('click', e => {
//     console.log(e.target);
//     console.log(e.currentTarget);
// });
// document.querySelector('.blog__years').addEventListener('click', e => {
//     console.log(e.target);
//     console.log(e.currentTarget);
// });
