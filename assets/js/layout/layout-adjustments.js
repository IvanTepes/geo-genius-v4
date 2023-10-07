'use strict';

// Import DOM elements from a collection
import {
    appHeader,
    appFooter,
    appCategory,
    appInstruction,
    appPreGameCountdown,
    appGame,
    appEndGameStatistic,
    categoryCapital,
    categoryFlag,
} from '../element-collection/dom-elements.js';

// Function to adjust the layout based on the screen orientation and window size
function adjustLayout() {
    // Check if the current screen orientation is portrait
    const isPortrait = window.matchMedia('(orientation: portrait)').matches;

    // Get the computed height of the app header
    const headerHeight = getComputedStyle(appHeader).height;

    // Calculate a height value based on twice the header height
    const heightValue = parseFloat(headerHeight) * 2;

    // Set the height of the app footer to match the header height
    appFooter.style.height = headerHeight;

    // Adjust the heights of various app sections based on the header height
    appCategory.style.height = `calc(100% - ${heightValue}px)`;
    appInstruction.style.height = `calc(100% - ${heightValue}px)`;
    appPreGameCountdown.style.height = `calc(100% - ${heightValue}px)`;
    appGame.style.height = `calc(100% - ${heightValue}px)`;
    appEndGameStatistic.style.height = `calc(100% - ${heightValue}px)`;

    // Adjust the heights of categoryFlag and categoryCapital based on screen orientation
    if (isPortrait) {
        categoryFlag.style.height = `calc(40% - ${headerHeight} / 2 )`;
        categoryCapital.style.height = `calc(40% - ${headerHeight} / 2 )`;
    } else {
        categoryFlag.style.height = `calc(80% - ${headerHeight} / 2 )`;
        categoryCapital.style.height = `calc(80% - ${headerHeight} / 2 )`;
    }
}

// Add event listeners for window resize and page load events to trigger layout adjustments
window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);
