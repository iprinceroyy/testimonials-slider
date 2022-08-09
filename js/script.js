const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

let currentSlide = 0;
const maxSlide = slides.length;

const gotToSlide = currSlide => {
    slides.forEach(
        (slide, i) =>
        (slide.style.transform = `translateX(${100 * (i - currSlide)}%)`)
    );
};

// Next Slide
const nextSlide = () => {
    if (currentSlide === maxSlide - 1) currentSlide = 0;
    else currentSlide++;

    gotToSlide(currentSlide);
};

// Prev Slide
const prevSlide = () => {
    if (currentSlide === 0) currentSlide = maxSlide - 1;
    else currentSlide--;

    gotToSlide(currentSlide);
};

// Intial call
const init = () => {
    gotToSlide(0);
};
init();

// Event Handlers
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);