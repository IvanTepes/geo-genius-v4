'use strict';

import { gameData } from '../data/game-data.js';
import { gameAnswersBtns, gameScoreLabel } from '../element-collection/dom-elements.js';

/**
 * Check if any answer button has the 'game__answer-btn--selected' class.
 * If not, decrement the game score.
 * You can consider adding an update logic for when an answer is selected.
 */
export function isAnswered() {
    let answered = false; // Initialize a variable to track if any button has the class

    // Check each answer button for the selected class
    gameAnswersBtns.forEach(element => {
        if (element.classList.contains('game__answer-btn--selected')) {
            answered = true; // At least one button has the class
        }
    });

    if (!answered && gameData.score > 0) {
        // Decrement the game score if no answer is selected and the score is greater than 0
        gameData.score--;
        gameScoreLabel.textContent = gameData.score;
    } else if (answered) {
        // POSSIBLE UPDATE LOGIC HERE
    }
}
