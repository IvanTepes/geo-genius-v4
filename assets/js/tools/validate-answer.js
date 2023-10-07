'use strict';

import { gameData } from '../data/game-data.js';
import { gameScoreLabel } from '../element-collection/dom-elements.js';
import { disableBtns } from './button-control.js';

/**
 * Check if the user's answer is correct and update the game accordingly.
 * @param {HTMLElement} userAnswer - The selected answer button element.
 */
export function checkAnswer(userAnswer) {
    // Get the currently selected answer button
    const selectedButton = document.querySelector('.game__answer-btn--selected');

    // Get the selected game category (e.g., 'flag' or 'capital')
    const selectedCategory = gameData.selectedCategory;

    // Define validation functions for each category
    const categoryValidation = {
        flag: (userAnswer, correctCountry) => userAnswer === correctCountry.name,
        capital: (userAnswer, correctCountry) => userAnswer === correctCountry.capital,
    };

    // Select the appropriate validation function based on the category
    const validateAnswer = categoryValidation[selectedCategory];

    // Get the correct country data from gameData
    const correctCountry = gameData.correctCountry;

    if (validateAnswer(userAnswer.textContent, correctCountry)) {
        // If the answer is correct
        selectedButton.classList.add('game__answer--correct');

        // Update game score and correct answers count
        let gameScore = gameData.score;
        let correctAnswers = gameData.correctAnswers;

        gameScore++;
        correctAnswers++;

        // Update the game score label
        gameScoreLabel.textContent = gameScore;

        // Update gameData with the new score and correct answers count
        gameData.score = gameScore;
        gameData.correctAnswers = correctAnswers;

        // Disable answer buttons to prevent further interactions
        disableBtns();
    } else {
        // If the answer is incorrect
        selectedButton.classList.add('game__answer--incorrect');

        // Disable answer buttons to prevent further interactions
        disableBtns();
    }
}
