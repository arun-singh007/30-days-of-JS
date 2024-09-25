/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const a=[]
    arr.forEach((ele,index)=>{
        if(fn(ele,index)){
            a.push(ele)
        }
    })
    return a;
};