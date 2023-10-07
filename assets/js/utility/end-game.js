'use strict';

import { updateScore } from './update-score.js';
import { animationScaleIn, animationScaleOut } from '../animations/animation-handler.js';
import { gameData } from '../data/game-data.js';
import {
    appEndGameStatistic,
    appGame,
    backBtnSvg,
    endGameHighScore,
    endGameLabelValue,
    endGameQuestionCorrect,
    endGameQuestionCount,
    nextQuestion,
} from '../element-collection/dom-elements.js';

/**
 * End the game, update game data, and display end game statistics.
 */
export function endGame() {
    // Update the player's score for the selected category
    updateScore(gameData.selectedCategory, gameData.score);

    // Reset the usedFlags array to prepare for a new game
    gameData.usedFlags = [];

    // Remove data-bs-toggle and data-bs-target attributes from backBtnSvg
    backBtnSvg.removeAttribute('data-bs-toggle');
    backBtnSvg.removeAttribute('data-bs-target');

    // Update end game statistics with the user's score, question count, and correct answers
    endGameLabelValue.textContent = gameData.score;
    endGameQuestionCount.textContent = gameData.questionCount;
    endGameQuestionCorrect.textContent = gameData.correctAnswers;

    // Determine and display the high score for the selected category
    if (gameData.playerScores[gameData.selectedCategory].highScore > gameData.score) {
        endGameHighScore.textContent = gameData.playerScores[gameData.selectedCategory].highScore;
    } else {
        endGameHighScore.textContent = gameData.score;
    }

    // Hide the game and next question elements with animation
    animationScaleOut([appGame, nextQuestion]);

    // Check if the reset or restart game modal is open and close it
    const resetModal = document.getElementById('resetGameModal');
    const restartModal = document.getElementById('restartGameModal');

    if (resetModal.classList.contains('show')) {
        const modal = bootstrap.Modal.getInstance(resetModal);
        modal.hide();
    } else if (restartModal.classList.contains('show')) {
        const modal = bootstrap.Modal.getInstance(restartModal);
        modal.hide();
    }

    // Display end game statistics with animation
    setTimeout(() => {
        animationScaleIn(appEndGameStatistic);
    }, 350);
}
