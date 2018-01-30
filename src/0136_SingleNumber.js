/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var result = 0
  nums.forEach((item)=>{
      result ^= item
  })
  return result
};