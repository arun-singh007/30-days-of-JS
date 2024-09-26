/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var val = 0;
    if(nums.length == 0){
        return init
    }
    nums.forEach((ele,index)=>{
        if(index==0)
        val=fn(init,ele)
        else
        val=fn(val,ele)
    })
    return val
};