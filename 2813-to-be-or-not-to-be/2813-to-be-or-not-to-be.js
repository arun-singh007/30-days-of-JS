/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function toBe(toBeVal){
        if(val === toBeVal){
            return true
        }
        throw new Error('Not Equal')
    }
    function notToBe(notToBeVal){
        if(val !== notToBeVal){
            return true
        }
        throw new Error('Equal')
    }
    return {toBe,notToBe}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */