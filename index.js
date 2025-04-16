const header = document.querySelector('.header');
const headerA = document.querySelectorAll('.header-a');
const main = document.querySelector('.main');
const inputs = document.querySelectorAll('.input');
const themeText = document.getElementById("theme-container-p");
const themecontainer = document.querySelector('.theme-container');
const themebutton = document.querySelector('.theme-container-button');

// Initial theme state
let isLightTheme = false;

themebutton.addEventListener('click', function() {
    if (isLightTheme) {
        // Switch to dark theme
        header.style.backgroundColor = 'black';
        headerA.forEach(container => {
            container.style.color = 'white';
        });
        main.style.backgroundColor = 'rgb(30, 30, 30)'; // Dark background
        inputs.forEach(input => {
            input.style.color = 'white';
            input.style.borderBottom = '1px solid white';
        });
        const allTextElements = document.querySelectorAll('.main *');
        allTextElements.forEach(element => {
            element.style.color = 'white';
        });
        themecontainer.style.justifyContent = 'flex-end';
        themecontainer.style.backgroundColor = 'white';
        themebutton.style.backgroundColor = 'black'; // Dark button
        themeText.style.fontSize = '12px';
        themeText.textContent = 'Dark';
        themeText.style.color = 'white';
    } else {
        // Switch to light theme
        header.style.backgroundColor = 'rgb(239, 236, 236)';
        headerA.forEach(container => {
            container.style.color = 'black';
        });
        main.style.backgroundColor = 'rgb(250, 250, 245)';
        inputs.forEach(input => {
            input.style.color = 'black';
            input.style.borderBottom = '1px solid black';
        });
        const allTextElements = document.querySelectorAll('.main *');
        allTextElements.forEach(element => {
            element.style.color = 'black'; 
        });
        themecontainer.style.justifyContent = 'flex-start';
        themecontainer.style.backgroundColor = 'black';
        themebutton.style.backgroundColor = 'white';
        themeText.style.fontSize = '10px';
        themeText.textContent = 'White';
        themeText.style.color = 'black';
    }
    // Toggle the theme state
    isLightTheme = !isLightTheme;
});