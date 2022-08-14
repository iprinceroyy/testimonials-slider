## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./assets/design/desktop-preview.jpg)

### Links

- Live Site URL: [Live site URL here](https://coding-testimonial-slider.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```js
const gotToSlide = currSlide => {
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${100 * (i - currSlide)}%)`)
  );
};
```

## Author

- Frontend Mentor - [@iprinceroyy](https://www.frontendmentor.io/profile/iprinceroyy)
- Twitter - [@prince_popups](https://www.twitter.com/@prince_popups)
