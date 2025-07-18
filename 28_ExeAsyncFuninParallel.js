/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        if (functions.length === 0) {
            resolve([]);
            return;
        }

        functions.forEach((fn, index) => {
            try {
                fn().then(result => {
                    results[index] = result;
                    completed++;
                    if (completed === functions.length) {
                        resolve(results);
                    }
                }).catch(reject); // Reject on first error
            } catch (err) {
                reject(err); // If function throws an error immediately
            }
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */