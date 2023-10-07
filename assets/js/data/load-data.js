import { LSAppHighScoreKey, LSAppName } from './local-storage-data.js';
import { gameData } from './game-data.js';

const folderData = JSON.parse(localStorage.getItem(LSAppName));

// Load game data from local storage and store that data to temporary storage
export function loadGameDataFromLocalStorage() {
    if (folderData) {
        // Check if highscore data exists in local storage
        if (folderData[LSAppHighScoreKey]) {
            // Update gameData with highscore data from local storage
            gameData.playerScores = folderData[LSAppHighScoreKey];
        }
    }
}
