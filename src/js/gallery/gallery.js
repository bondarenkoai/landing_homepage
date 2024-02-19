console.log('dsad');

import bgImageArray from '../../images/bg-img/bg-img-arr';

let target = 0;
let current = 0;
let ease = 0.075;

const slider = document.querySelector('.slider');
const sliderWrapper = document.querySelector('.slider__wrapper');
const slides = document.querySelectorAll('.slider__slide');

function createMarkup(arr) {
    return arr
        .map(({ src, alt }) => {
            return `
    <div class="slider__slide">
        <img src="${src}" alt="${alt}" width="400">
    </div>
    `;
        })
        .join('');
}

sliderWrapper.innerHTML = createMarkup(bgImageArray);

let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function updateScaleAndPosition() {
    slides.forEach(slide => {
        const rect = slide.getBoundingClientRect();
        const centralPosition = (rect.left + rect.right) / 2;
        const distanceFromCentre = centralPosition - window.innerWidth / 2;

        let scale, offsetX;
        if (distanceFromCentre > 0) {
            scale = Math.min(1.75, 1 + distanceFromCentre / window.innerWidth);
            offsetX = (scale - 1) * 300;
        } else {
            scale = Math.max(
                0.5,
                1 - Math.abs(distanceFromCentre) / window.innerWidth
            );
            offsetX = 0;
        }

        gsap.set(slide, { scale: scale, x: offsetX });
    });
}

function update() {
    current = lerp(current, target, ease);

    gsap.set('.slider__wrapper', {
        x: -current,
    });

    updateScaleAndPosition();

    requestAnimationFrame(update);
}

window.addEventListener('resize', e => {
    maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
});

window.addEventListener('wheel', e => {
    target += e.deltaY;
    target = Math.max(0, target);
    target = Math.min(maxScroll, target);
});

update();

const footer = document.querySelector('.footer__gallery');

let isHorizontalScrollComplete = false;

sliderWrapper.addEventListener('scroll', () => {
    const scrollThreshold = 10; // поріг для визначення завершення горизонтального скролінгу

    if (
        sliderWrapper.scrollLeft + sliderWrapper.clientWidth >=
        sliderWrapper.scrollWidth - scrollThreshold
    ) {
        // якщо досягнуто кінця горизонтального скролінгу
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
