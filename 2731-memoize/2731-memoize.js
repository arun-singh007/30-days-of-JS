/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let lookUpTable={}
    let calCount=0;
    return function(...args) {
        if(args.length == 2){
            const key = `${args[0]}_${args[1]}`;
            if (lookUpTable.hasOwnProperty(key)) {
                return lookUpTable[key]; 
            }
            const result = fn(...args)
            lookUpTable[key] = result;
            return result;
        }
        const key = args
        if(lookUpTable.hasOwnProperty(key)){
            return lookUpTable[key];
        }
        const result = fn(...args)
        lookUpTable[key] = result;
        return result;
    }
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