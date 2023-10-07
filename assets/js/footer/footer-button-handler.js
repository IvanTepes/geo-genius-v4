'use strict';

// Import animation functions for scaling in and out
import { animationScaleIn, animationScaleOut } from '../animations/animation-handler.js';

// Import DOM elements from a collection
import {
    appInstruction,
    backBtnSvg,
    appCategory,
    gitHubBtnSvg,
    linkedInBtnSvg,
    appEndGameStatistic,
    nextQuestion,
    resetBtnSvg,
    countDownLabel,
} from '../element-collection/dom-elements.js';

// Import game data
import { gameData } from '../data/game-data.js';

// Add a click event listener to the back button SVG
backBtnSvg.addEventListener('click', () => {
    // Check if the back button is visible
    if (backBtnSvg.classList.contains('visible')) {
        // Reset the countdown label to '00 : 03'
        countDownLabel.textContent = '00 : 03';

        // Check if the app instruction is visible
        if (appInstruction.classList.contains('visible')) {
            // Clear the selected category in game data
            gameData.selectedCategory = undefined;

            // Trigger the scale-out animation for the instruction and back button
            animationScaleOut([appInstruction, backBtnSvg]);

            // After the scale-out animation, trigger the scale-in animation for category and buttons
            setTimeout(() => {
                animationScaleIn([appCategory, gitHubBtnSvg, linkedInBtnSvg]);
            }, 350); // Delay of 350 milliseconds
        }

        // Check if the end game statistics are visible
        else if (appEndGameStatistic.classList.contains('visible')) {
            // Clear the selected category in game data
            gameData.selectedCategory = undefined;

            // Trigger the scale-out animation for the end game statistics, back button, next question button, and reset button
            animationScaleOut([appEndGameStatistic, backBtnSvg, nextQuestion, resetBtnSvg]);

            // After the scale-out animation, trigger the scale-in animation for category and buttons
            setTimeout(() => {
                animationScaleIn([appCategory, gitHubBtnSvg, linkedInBtnSvg]);
            }, 350); // Delay of 350 milliseconds
        }
    }
});
