const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btns--left');
const btnRight = document.querySelector('.slider__btns--right');

let currentSlide = 0;
const maxSlide = slides.length;

const gotToSlide = currSlide => {
    // Add transform property on each slide
    slides.forEach(
        (slide, i) =>
        (slide.style.transform = `translateX(${105 * (i - currSlide)}%)`)
    );
};

// Next Slide
const nextSlide = () => {
    // If curr slide is at max then make first slide as curr slide
    currentSlide === maxSlide - 1 ? (currentSlide = 0) : currentSlide++;

    gotToSlide(currentSlide);
};

// Prev Slide
const prevSlide = () => {
    // If curr slide is at 0, then make last slide as curr slide
    currentSlide === 0 ? (currentSlide = maxSlide - 1) : currentSlide--;

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