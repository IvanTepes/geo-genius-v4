'use strict';

import { endGame } from './end-game.js';

let timerInterval;
let timeInSeconds = 0;
let timerElement;

export function startTimer(targetElement, seconds, timeType) {
    // Clear any existing interval to avoid multiple timers running concurrently
    clearInterval(timerInterval);

    // Set the target element
    timerElement = targetElement;

    // Calculate the initial time remaining
    timeInSeconds = seconds;

    // Update the timer every second
    timerInterval = setInterval(() => {
        if (timeInSeconds <= 0) {
            if (timeType === 'gameTime') {
                endGame();
                stopTimer();
                return;
            } else {
                stopTimer();
                return;
            }
            // Timer reached zero, stop the timer
        }
        timeInSeconds--;
        updateTimerDisplay();
    }, 1000);
}

export function stopTimer() {
    clearInterval(timerInterval);
}

export function resetTimer() {
    clearInterval(timerInterval);
    timeInSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    if (timerElement) {
        timerElement.textContent = formatTime(timeInSeconds);
    }
}

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
}

// Function to format a timestamp as "hh:mm:ss"
export function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
