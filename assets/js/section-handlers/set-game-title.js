'use strict';

// Import game data and the gameQuestionLabel element from their respective modules
import { gameData } from '../data/game-data.js';
import { gameQuestionLabel } from '../element-collection/dom-elements.js';

// Define a function to set the text of the question label
export function setGameQuestion() {
    // Get the selected game category from gameData
    const gameCategory = gameData.selectedCategory;

    // Initialize an empty string for the question text
    let questionText = '';

    // Determine the question text based on the selected game category
    if (gameCategory === 'flag') {
        questionText = 'Which country does this flag belong to?';
    } else if (gameCategory === 'capital') {
        questionText = 'What is the capital of this country?';
    }

    // Set the text content of the gameQuestionLabel element to the determined question text
    gameQuestionLabel.textContent = questionText;
}
