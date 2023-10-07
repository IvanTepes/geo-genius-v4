'use strict';

import { gameData } from '../data/game-data.js';
import { gameAnswersBtns } from '../element-collection/dom-elements.js';

export function setAnswerButtonsText(answers) {
    const selectedCategory = gameData.selectedCategory;

    // Define a function to calculate the CSS class based on the answer text length
    function getAnswerClass(answerText) {
        const answerCountryLength = answerText.length;

        if (answerCountryLength <= 11) {
            return 'game__answer-btn--short-font';
        } else if (answerCountryLength <= 15) {
            return 'game__answer-btn--medium-font';
        } else if (answerCountryLength <= 18) {
            return 'game__answer-btn--long-font';
        } else {
            return 'game__answer-btn--extra-long-font';
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
