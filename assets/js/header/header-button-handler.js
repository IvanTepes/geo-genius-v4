import { LSAppName, LSAppThemeKey } from '../data/local-storage-data.js';
import { headerMenuBtn, headerThemeToggleBtn } from '../element-collection/dom-elements.js';

// ! MENU BTN

headerMenuBtn.addEventListener('click', () => {
    console.log('Menu-btn clicked');
    headerMenuBtn.classList.toggle('header__menu--opened');
    headerMenuBtn.setAttribute('aria-expanded', headerMenuBtn.classList.contains('header__menu--opened'));
});

// ! THEME TOGGLE

const htmlDocument = document.firstElementChild;

const getColorPreference = () => {
    const storageData = JSON.parse(localStorage.getItem(LSAppName)) || {};

    if (storageData[LSAppThemeKey]) {
        return storageData[LSAppThemeKey];
    } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
};

let themeValue = getColorPreference();

const setPreference = () => {
    const storageData = JSON.parse(localStorage.getItem(LSAppName)) || {};
    storageData[LSAppThemeKey] = themeValue;

    localStorage.setItem(LSAppName, JSON.stringify(storageData));
    reflectPreference();
};

const reflectPreference = () => {
    htmlDocument.setAttribute('data-theme', themeValue);
    htmlDocument.classList.add(themeValue);

    headerThemeToggleBtn?.setAttribute('aria-label', themeValue);
};

reflectPreference();

const onClick = () => {
    themeValue = themeValue === 'light' ? 'dark' : 'light';
    htmlDocument.removeAttribute('class');

    setPreference();
};

window.onload = () => {
    reflectPreference();

    headerThemeToggleBtn.addEventListener('click', onClick);
};
