'use strict';

// Import animations and DOM elements
import { animationScaleIn, animationScaleOut } from './animations/animation-handler.js';
import {
    appCategory,
    appInstruction,
    appGame,
    flagCard,
    capitalCard,
    gameTimerLabel,
    gameHighScoreLabel,
    startGameBtn,
    backBtnSvg,
    resetBtnSvg,
    gitHubBtnSvg,
    linkedInBtnSvg,
    gameAnswersBtns,
    appPreGameCountdown,
    headerThemeToggleBtn,
    headerMenuBtn,
    nextQuestion,
    gameScoreLabel,
    resetGameBtn,
    appEndGameStatistic,
    restartGameBtn,
} from './element-collection/dom-elements.js';

// Import game data and utility functions
import { gameData } from './data/game-data.js';
import { startCountDown } from './section-handlers/pre-game-countdown.js';
import { startTimer, stopTimer } from './utility/timer.js';
import { setGameQuestion } from './section-handlers/set-game-title.js';
import { generateQuestion } from './tools/question-generator.js';
import { initializeGame } from './utility/initialize-game.js';
import { loadGameDataFromLocalStorage } from './data/load-data.js';
import { checkAnswer } from './tools/validate-answer.js';
import { enableBtns } from './tools/button-control.js';
import { isAnswered } from './tools/look-answer.js';

// Attach click event listeners to card elements
flagCard.addEventListener('click', () => {
    handleCardClick('flag');
});

capitalCard.addEventListener('click', () => {
    handleCardClick('capital');
});

// Start game button click event
startGameBtn.addEventListener('click', () => {
    loadGameDataFromLocalStorage();

    const category = gameData.selectedCategory;
    const highScore = gameData.playerScores[category].highScore;

    // Delay before showing reset button
    setTimeout(() => {
        resetBtnSvg.setAttribute('data-bs-toggle', 'modal');
        resetBtnSvg.setAttribute('data-bs-target', '#resetGameModal');
    }, 3350);

    // Animate elements out and start countdown
    animationScaleOut([headerMenuBtn, appInstruction, backBtnSvg, headerThemeToggleBtn]);

    setTimeout(() => {
        animationScaleIn([appPreGameCountdown]);
        startCountDown();

        setTimeout(() => {
            animationScaleOut([appPreGameCountdown]);

            setTimeout(() => {
                animationScaleIn([appGame, resetBtnSvg, backBtnSvg, headerThemeToggleBtn, headerMenuBtn, nextQuestion]);

                gameHighScoreLabel.textContent = highScore;
            }, 350);

            // Start game timer
            startTimer(gameTimerLabel, gameData.gameTime, 'gameTime');
            // startTimer(gameTimerLabel, 2, 'gameTime');

            // Set the game question
            setGameQuestion();
        }, 3000);
    }, 350);
});

// Next question button click event
nextQuestion.addEventListener('click', () => {
    let questionCount = gameData.questionCount;
    questionCount++;
    gameData.questionCount = questionCount;

    isAnswered();
    clearAnswer();
    generateQuestion();
    enableBtns();
});

// Update player score and UI label when answer buttons are clicked
gameAnswersBtns.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('game__answer-btn--selected');
        checkAnswer(element);
    });
});

// Reset game button click event
resetGameBtn.addEventListener('click', () => {
    backBtnSvg.setAttribute('data-bs-toggle', 'modal');
    backBtnSvg.setAttribute('data-bs-target', '#restartGameModal');

    const playerHighScore = gameData.playerScores[gameData.selectedCategory].highScore;
    const playerScore = gameData.score;

    // Update player's high score
    if (playerScore > playerHighScore) {
        gameData.playerScores[gameData.selectedCategory].highScore = playerScore;
    }

    // Reset game data
    gameData.correctAnswers = 0;
    gameData.questionCount = 1;
    gameData.score = 0;
    gameData.usedFlags = [];

    // Update UI
    gameScoreLabel.textContent = '--';
    gameHighScoreLabel.textContent = gameData.playerScores[gameData.selectedCategory].highScore;

    clearAnswer();
    enableBtns();

    generateQuestion();

    startTimer(gameTimerLabel, gameData.gameTime, 'gameTime');

    // Hide end game statistics if visible
    if (appEndGameStatistic.classList.contains('visible')) {
        animationScaleOut([appEndGameStatistic]);

        setTimeout(() => {
            animationScaleIn([appGame, nextQuestion]);
        }, 350);
    }
});

// Restart game button click event
restartGameBtn.addEventListener('click', () => {
    backBtnSvg.removeAttribute('data-bs-toggle');
    backBtnSvg.removeAttribute('data-bs-target');

    // Reset game data
    gameData.correctAnswers = 0;
    gameData.questionCount = 1;
    gameData.score = 0;
    gameData.usedFlags = [];

    // Update UI
    gameScoreLabel.textContent = '--';

    clearAnswer();
    enableBtns();

    stopTimer();

    // Animate elements out and show category selection
    animationScaleOut([appGame, resetBtnSvg, backBtnSvg, nextQuestion]);

    setTimeout(() => {
        animationScaleIn([appCategory, linkedInBtnSvg, gitHubBtnSvg]);
    }, 350);
});

// Reusable function to handle card click events
function handleCardClick(category) {
    gameData.selectedCategory = category;

    // Animate elements out and show game instructions
    animationScaleOut([appCategory, linkedInBtnSvg, gitHubBtnSvg]);

    setTimeout(() => {
        animationScaleIn([appInstruction, backBtnSvg]);
    }, 350);

    initializeGame();
}

// Remove classes from answer buttons
function clearAnswer() {
    gameAnswersBtns.forEach(element => {
        element.classList.remove('game__answer-btn--selected', 'game__answer--correct', 'game__answer--incorrect');
    });
}
