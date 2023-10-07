'use strict';

// Define animation classes as constants for reuse
const animation = {
    scaleInCenter: 'scale-in-center', // CSS class for scaling in animation
    scaleOutCenter: 'scale-out-center', // CSS class for scaling out animation
};

// Function to toggle the specified animation for a given set of elements
export function toggleAnimation(elements, action) {
    // If 'elements' is not an array, convert it into an array with a single element
    if (!Array.isArray(elements)) {
        elements = [elements];
    }

    // Iterate through each element in the array
    elements.forEach(element => {
        // Perform animation based on the provided 'action'
        switch (action) {
            case 'in': // When action is 'in'
                // Add the 'scaleInCenter' class for scaling in
                element.classList.add(animation.scaleInCenter);
                // Remove the 'scaleOutCenter' class for scaling out (if it exists)
                element.classList.remove(animation.scaleOutCenter);
                // Remove the 'hidden' class to make the element visible
                element.classList.remove('hidden');
                // Use a timeout to add the 'visible' class after a delay
                setTimeout(() => {
                    element.classList.add('visible');
                }, 350); // Delay of 350 milliseconds
                break;

            case 'out': // When action is 'out'
                // Add the 'scaleOutCenter' class for scaling out
                element.classList.add(animation.scaleOutCenter);
                // Remove the 'scaleInCenter' class for scaling in (if it exists)
                element.classList.remove(animation.scaleInCenter);
                // Remove the 'visible' class to hide the element
                element.classList.remove('visible');
                // Use a timeout to add the 'hidden' class after a delay
                setTimeout(() => {
                    element.classList.add('hidden');
                }, 350); // Delay of 350 milliseconds
                break;

            default:
                console.error('Invalid animation action. Use "in" or "out".');
                break;
        }
    });
}

// Convenience function to trigger the 'out' animation for elements
export function animationScaleOut(elements) {
    toggleAnimation(elements, 'out');
}

// Convenience function to trigger the 'in' animation for elements
export function animationScaleIn(elements) {
    toggleAnimation(elements, 'in');
}
