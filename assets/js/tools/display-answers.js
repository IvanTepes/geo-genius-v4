'use strict';

import { gameData } from '../data/game-data.js';
import { gameAnswersBtns } from '../element-collection/dom-elements.js';

export function setAnswerButtonsText(answers) {
    const selectedCategory = gameData.selectedCategory;

    // Define a function to calculate the CSS class based on the answer text length
    function getAnswerClass(answerText) {
        const answerCountryLength = answerText.length;
        console.log(answerText, answerText.length);

        if (answerCountryLength <= 15) {
            return 'font__extra-large';
        } else if (answerCountryLength <= 18) {
            return 'font__large';
        } else if (answerCountryLength <= 22) {
            return 'font__medium';
        } else {
            return 'font__small';
        }
    }

    for (let i = 0; i < gameAnswersBtns.length; i++) {
        const answerButton = gameAnswersBtns[i];
        const answerText = selectedCategory === 'flag' ? answers[i].name : answers[i].capital;

        // Calculate the CSS class for the answer button
        const answerClass = getAnswerClass(answerText);

        // Set the text content and apply the CSS class to the answer button
        answerButton.textContent = answerText;
        answerButton.className = 'game__answer-btn'; // Reset the class
        answerButton.classList.add(answerClass);
    }
}
