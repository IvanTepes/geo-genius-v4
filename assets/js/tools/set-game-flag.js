'use strict';

import { gameFlagImg } from '../element-collection/dom-elements.js';

// Define a function to set the flag image
export function setFlagImage(imageUrl) {
    gameFlagImg.forEach(element => {
        element.src = imageUrl;
    });
}
