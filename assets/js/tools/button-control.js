import { gameAnswersBtns } from '../element-collection/dom-elements.js';

export function disableBtns() {
    gameAnswersBtns.forEach(element => {
        element.setAttribute('disabled', '');
        element.removeAttribute('enabled');
    });
}

export function enableBtns() {
    gameAnswersBtns.forEach(element => {
        element.removeAttribute('disabled');
        element.setAttribute('enabled', '');
    });
}
