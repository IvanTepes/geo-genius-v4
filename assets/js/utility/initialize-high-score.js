'use strict';

import { gameData } from '../data/game-data.js';
import { LSAppHighScoreKey, LSAppName } from '../data/local-storage-data.js';

/**
 * Initialize high score data in local storage and update gameData with it.
 */
export function initializeHighScore() {
    // Check if the high score data folder exists in local storage
    const folderData = JSON.parse(localStorage.getItem(LSAppName));

    if (!folderData) {
        // If the folder doesn't exist, create it with initial values
        const initialFolderData = {
            [LSAppHighScoreKey]: {
                flag: {
                    highScore: 0, // Set the initial high score to 0
                    scores: [],
                },
                capital: {
                    highScore: 0, // Set the initial high score to 0
                    scores: [],
                },
            },
        };

        // Store the initial folder data in local storage
        localStorage.setItem(LSAppName, JSON.stringify(initialFolderData));

        // Update gameData with the initial high score data
        gameData.playerScores = initialFolderData[LSAppHighScoreKey];
    } else if (!folderData[LSAppHighScoreKey]) {
        // If the folder exists but doesn't contain high score data, initialize it with initial values
        folderData[LSAppHighScoreKey] = {
            flag: {
                highScore: folderData[LSAppHighScoreKey]?.flag?.scores[0] || 0,
                scores: [],
            },
            capital: {
                highScore: folderData[LSAppHighScoreKey]?.capital?.scores[0] || 0,
                scores: [],
            },
        };

        // Store the updated folder data in local storage
        localStorage.setItem(LSAppName, JSON.stringify(folderData));

        // Update gameData with the initialized high score data
        gameData.playerScores = folderData[LSAppHighScoreKey];
    }
}
