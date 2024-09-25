/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    arr.forEach((ele,index)=>{
        arr[index]=fn(ele,index)
    })
    return arr
};