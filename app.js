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