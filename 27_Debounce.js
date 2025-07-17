/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer = null;  // To keep track of the current timer

    return function(...args) {
        // If a previous timer exists, cancel it
        if (timer !== null) {
            clearTimeout(timer);
        }

        // Start a new timer
        timer = setTimeout(() => {
            fn(...args);  // Call the original function with latest args
        }, t);
    };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */