# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [https://github.com/Buch-dev/social-dashboard.git]
- Live Site URL: [https://buch-dev.github.io/social-dashboard/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learnt how to create a theme switcher using a toggle button created using HTML, CSS and vanilla Javascript

To see how you can add code snippets, see below:

```html
<div class="check">
  <input type="checkbox" name="checkbox" id="checkbox" class="checkbox">
  <label for="checkbox" class="label">
    <div class="ball"></div>
  </label>
</div>
```
```css
.checkbox {
  display: none;
}

.label {
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  padding: .1rem;
  height: 23px;
  width: 48px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
}

.ball {
  background-color: $Very-Dark-Blue;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  position: absolute;
  transition: transform .1s linear;
}
```
```js
const body = document.getElementById('body');
const checkBox = document.getElementById('checkbox');
const header = document.getElementById('header');
const sectionOne = document.getElementById('section-1');
const main = document.getElementById('main');
const sectionTwo = document.getElementById('section-2');

checkBox.addEventListener('change', lightTheme);

function lightTheme() {
    body.classList.toggle('body-light');
    header.classList.toggle('header-light-theme');
    sectionOne.classList.toggle('section-1-light-theme');
    main.classList.toggle('light-main');
    sectionTwo.classList.toggle('section-2-light-theme');
}
```

### Continued development

I'll like to strenghten my knowlegde on vanilla javascript, i.e, creating more web apps using vanilla javascript

### Useful resources

- [LightDark Theme Toggle with CSS and JavaScript - Florin Pop]() - This helped me for the toggle button

## Author

- Website - [Daniel Okafor](https://buch-dev.GitHub.io/Daniel-Okafor/)
- Frontend Mentor - [@Buch-dev](https://www.frontendmentor.io/profile/Buch-dev)
- Twitter - [@bucheed](https://www.twitter.com/bucheed)

