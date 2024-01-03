## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./client/src/assets/images/Screenshot%202024-01-03%20at%2018-05-20%20News%20HomePage%20-%20Frontend%20Mentor.png)

### Links

- Solution URL: [GitHub](https://github.com/KevinBolanosDev/news-homepage-frontend-mentor)
- Live Site URL: [Site Solution Netlify](https://news-homepage-mentor-solution.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- [React](https://es.react.dev/) - JS library
- [Tailwindcss](https://tailwindcss.com/) - For styles

### What I learned

I took a test to practice with react and using tailwindcss, I managed to develop and strengthen CSS skills using tailwind component, the most difficult part was the drop-down menu where the logic did not work for me, but after several hours of trial and error I achieved the final goal.

```html
<div>
    <button className={`me-4 sm:hidden ${isMenuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
        <img src={menuOpen} alt="Open Menu" />
      </button>
        <ul className={`fixed top-0 right-0 h-full bg-black bg-opacity-50 w-full text-lg sm:space-y-0 sm:relative sm:flex sm:flex-row ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white text-neutral-veryDarkBlue font-medium h-full ps-6 py-6 space-y-5 ml-auto w-[260px] sm:py-0 sm:space-y-0 sm:w-auto sm:flex sm:gap-8 sm:text-neutral-darkGrayishBlue">
        <button className={`ml-auto mb-16 me-4 sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>
        <img src={menuClose} alt="Close Menu" />
        </button>
            <li>
              <a className="hover:text-primary-softRed" href='#' onClick={toggleMenu}>Home</a>
            </li>
            <li>
              <a className="hover:text-primary-softRed" href='#' onClick={toggleMenu}>New</a>
            </li>
            <li>
              <a className="hover:text-primary-softRed" href='#' onClick={toggleMenu}>popular</a>
            </li>
            <li>
              <a className="hover:text-primary-softRed" href='#' onClick={toggleMenu}>Trending</a>
            </li>
            <li>
              <a className="hover:text-primary-softRed" href='#' onClick={toggleMenu}>Categories</a>
            </li>
        </div>
        </ul>
    </div>
```

### Continued development

I will continue to refine the components used with tailwindcss, also improve and optimize the code in react.

## Author

- Website - [Kevin Andrés Bolaños](https://kevin-bolanos-dev-cv.netlify.app/)
- Frontend Mentor - [@KevinBolanosDev](https://www.frontendmentor.io/profile/KevinBolanosDev)
