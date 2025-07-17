/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        let result = [];
        for (let item of obj) {
            let cleaned = compactObject(item);
            if (cleaned) result.push(cleaned);
        }
        return result;
    }

    if (obj !== null && typeof obj === 'object') {
        let result = {};
        for (let key in obj) {
            let cleaned = compactObject(obj[key]);
            if (cleaned) result[key] = cleaned;
        }
        return result;
    }

    return obj;
};