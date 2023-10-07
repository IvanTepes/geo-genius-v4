'use strict';

// Import DOM elements and functions from their respective modules
import { backBtnSvg, countDownLabel } from '../element-collection/dom-elements.js';
import { generateQuestion } from '../tools/question-generator.js';
import { startTimer } from '../utility/timer.js';

// Function to start the countdown timer
export function startCountDown() {
    // Set the countdown time to 3 seconds
    const countDownTime = 3;

    // Configure the back button to open a modal
    backBtnSvg.setAttribute('data-bs-toggle', 'modal');
    backBtnSvg.setAttribute('data-bs-target', '#restartGameModal');

    // Start the countdown timer and display it in the countDownLabel element
    startTimer(countDownLabel, countDownTime, 'countDownTimer');

    // Generate question
    generateQuestion();
}
