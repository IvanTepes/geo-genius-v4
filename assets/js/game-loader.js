'use strict';

/**
 * Load a script and return a Promise that resolves when the script is loaded successfully.
 *
 * @param {string} scriptPath - The path to the script to be loaded.
 * @returns {Promise<void>} A Promise that resolves when the script is loaded successfully or rejects if there's an error.
 */
function loadScript(scriptPath) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = scriptPath;
        script.type = 'module';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

async function loadScripts() {
    try {
        await loadScript('assets/js/data/api-data.js');
        await loadScript('assets/js/header/header-button-handler.js');
        await loadScript('assets/js/layout/layout-adjustments.js');
        await loadScript('assets/js/footer/footer-button-handler.js');
        await loadScript('assets/js/game.js');
    } catch (error) {
        console.error('Error loading scripts:', error);
    }
}

// Start loading the scripts
loadScripts();
