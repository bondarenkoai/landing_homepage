console.log(333);

import arr from '../images/video/blogVideoArr';

console.log(arr);

const carousel = document.querySelector('.carousel');

function createMarkup(number) {
    const { id, src, description, place } = arr[number - 1]; // Коригуємо індекс, щоб відлік почався з 0

    return `
            <div class="carousel__item">
                    <video class="carousel__video" src="${src}" loop muted height="100%"></video>
                </div>
                <div class="carousel__item">
                    <video class="carousel__video active" src="${src}" autoplay loop muted height="100%"></video>
                    <div class="carousel__caption">
                        <h3 class="carousel__description">${description}</h3>
                        <p class="carousel__place">${place}</p>
                    </div>
                </div>
                <div class="carousel__item">
                    <video class="carousel__video" src="${src}" loop muted height="100%"></video>
            </div>
    `;
}

carousel.innerHTML += createMarkup(3);
