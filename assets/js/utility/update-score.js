'use strict';

import { LSAppHighScoreKey, LSAppName } from '../data/local-storage-data.js';
import { formatTimestamp } from './timer.js';

/**
 * Update the high score data for a specific category with a new score.
 * @param {string} category - The category for which to update the score (e.g., 'flag' or 'capital').
 * @param {number} newScore - The new score to be added.
 */
export function updateScore(category, newScore) {
    // Retrieve the existing high score data from local storage
    const existingDataJSON = localStorage.getItem(LSAppName);

    if (!existingDataJSON) {
        // If high score data is not initialized, log an error and exit
        console.error('Highscore data not initialized. Initialize it first.');
        return;
    }

    // Parse the existing high score data from JSON
    const existingData = JSON.parse(existingDataJSON);

    if (!existingData || !existingData[LSAppHighScoreKey]) {
        // If high score data is not properly structured, log an error and exit
        console.error('Highscore data not initialized.');
        return;
    }

    if (!existingData[LSAppHighScoreKey][category]) {
        // If high score data for the specified category is missing, log an error and exit
        console.error(`Highscore data not initialized for the category: ${category}`);
        return;
    }

    // Access the scores array for the specified category
    const scoresArray = existingData[LSAppHighScoreKey][category].scores;

    if (newScore !== undefined) {
        // Add the new score with its formatted timestamp to the scores array
        const timestamp = formatTimestamp(new Date());
        scoresArray.push({ score: newScore, time: timestamp });

        // Sort the scores array in descending order by score
        scoresArray.sort((a, b) => b.score - a.score);

        // Keep only the top three scores (or adjust as needed)
        scoresArray.splice(3);
    }

    // Calculate the highest score (the first score in the sorted array) or default to 0 if no scores
    const highestCategoryScore = scoresArray.length > 0 ? scoresArray[0].score : 0;

    // Update the 'highScore' in the specified category with the highest score
    existingData[LSAppHighScoreKey][category].highScore = highestCategoryScore;

    // Update the existing high score data in local storage with the updated data
    localStorage.setItem(LSAppName, JSON.stringify(existingData));
}
