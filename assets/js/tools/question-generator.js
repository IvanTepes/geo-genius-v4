'use strict';

import { gameData } from '../data/game-data.js';
import { setAnswerButtonsText } from './display-answers.js';
import { setFlagImage } from './set-game-flag.js';
import { updateGameData } from './update-game-data.js';

// Define a function to generate a question
export function generateQuestion() {
    let usedFlags = gameData.usedFlags;
    // Filter out flags that have already been used
    let availableFlags = gameData.countries.filter(country => !usedFlags.includes(country.name));

    if (availableFlags.length === 0) {
        // If all flags have been used, reset the usedFlags array
        availableFlags = gameData.countries;
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
    const wrongAnswers = generateWrongAnswers(correctCountry, gameData.countries);

    // Combine the correct answer and the wrong answers into one array
    const allAnswers = [correctCountry, ...wrongAnswers];

    // Shuffle the answers randomly
    const shuffledAnswers = shuffleArray(allAnswers);

    // Set the text of each answer button to one of the shuffled answers
    setAnswerButtonsText(shuffledAnswers);
}

// Define a function to choose a random country from the array
function chooseRandomCountry() {
    const countriesNewData = gameData.countries;
    return countriesNewData[Math.floor(Math.random() * countriesNewData.length)];
}

// Define a function to choose a random flag from the available flags
function chooseRandomFlag(availableFlags) {
    return availableFlags[Math.floor(Math.random() * availableFlags.length)];
}

// Define a function to generate three wrong answers for a given country
function generateWrongAnswers(correctCountry, countries) {
    const remainingCountries = countries.filter(country => country.name !== correctCountry.name);
    const wrongAnswers = [];

    while (wrongAnswers.length < 3) {
        const randomCountry = chooseRandomCountry(remainingCountries);

        if (!wrongAnswers.some(answer => answer.name === randomCountry.name)) {
            wrongAnswers.push(randomCountry);
        }
    }
    return wrongAnswers;
}

// Define a function to shuffle an array randomly
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
