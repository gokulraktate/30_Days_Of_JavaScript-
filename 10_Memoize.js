/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();
  let callCount = 0;

  const memoizedFn = (...args) => {
    const key = JSON.stringify(args); // unique key for args like [2,3] and [3,2] are different
    if (cache.has(key)) {
      return cache.get(key);
    }
    callCount++;
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };

  memoizedFn.getCallCount = () => callCount;

  return memoizedFn;
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */