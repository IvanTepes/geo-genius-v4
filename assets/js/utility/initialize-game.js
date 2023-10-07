'use strict';

import { loadGameDataFromLocalStorage } from '../data/load-data.js';
import { initializeHighScore } from './initialize-high-score.js';

export function initializeGame() {
    initializeHighScore();
    loadGameDataFromLocalStorage();
}
