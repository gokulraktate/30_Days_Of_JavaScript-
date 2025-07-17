/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = {};

    // Add all items from arr1
    for (let item of arr1) {
        map[item.id] = item;
    }

    // Add or merge items from arr2
    for (let item of arr2) {
        if (map[item.id]) {
            // Merge: arr2 value overrides arr1
            map[item.id] = { ...map[item.id], ...item };
        } else {
            map[item.id] = item;
        }
    }

    // Convert map to array and sort by id
    const result = Object.values(map);
    result.sort((a, b) => a.id - b.id);

    return result;
};