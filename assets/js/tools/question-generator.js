'use strict';

import { gameData } from '../data/game-data.js';
import { setAnswerButtonsText } from './display-answers.js';
import { setFlagImage } from './set-game-flag.js';
import { updateGameData } from './update-game-data.js';

// Define a function to generate a question
export function generateQuestion() {
    let usedFlags = gameData.usedFlags;
    const countries = gameData.countries;

    // Filter out flags that have already been used
    let availableFlags = countries.filter(country => !usedFlags.includes(country.name));

    // If all flags have been used, reset the usedFlags array
    if (availableFlags.length === 0) {
        availableFlags = countries;
        gameData.usedFlags = [];
    }

    // Choose a random flag from the availableFlags
    const correctCountry = chooseRandomFlag(availableFlags);

    // Add the chosen flag to the usedFlags array
    usedFlags.push(correctCountry.name);

    // Update game data with the correct country
    updateGameData('correctCountry', correctCountry);

    // Set the flag image to the chosen country's flag
    setFlagImage(correctCountry.flagImage);

    // Generate three wrong answers to accompany the correct answer
    const wrongAnswers = generateWrongAnswers(correctCountry, countries);

    // Combine the correct answer and the wrong answers into one array
    const allAnswers = [correctCountry, ...wrongAnswers];

    // Shuffle the answers randomly
    const shuffledAnswers = shuffleArray(allAnswers);

    // Set the text of each answer button to one of the shuffled answers
    setAnswerButtonsText(shuffledAnswers);
}

// Define a function to choose a random flag from the available flags
function chooseRandomFlag(availableFlags) {
    return availableFlags[Math.floor(Math.random() * availableFlags.length)];
}

// Define a function to generate three wrong answers for a given country
function generateWrongAnswers(correctCountry, countries) {
    const wrongAnswers = [];

    while (wrongAnswers.length < 3) {
        const randomCountry = chooseRandomFlag(countries);

        if (
            randomCountry.name !== correctCountry.name &&
            !wrongAnswers.some(answer => answer.name === randomCountry.name)
        ) {
            wrongAnswers.push(randomCountry);
        }
    }
    return wrongAnswers;
}

// Define a function to shuffle an array randomly
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
