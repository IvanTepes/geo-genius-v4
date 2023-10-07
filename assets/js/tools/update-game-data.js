'use strict';

import { gameData } from './../data/game-data.js';

export function updateGameData(propertiesToUpdate, data) {
    gameData[propertiesToUpdate] = data;
}
