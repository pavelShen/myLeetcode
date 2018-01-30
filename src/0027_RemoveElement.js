/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let pos = 0
  let result = 0
  for(let i=0;i<nums.length;i++){
    if(nums[i]!==val){
      nums[pos] = nums[i]
      pos++
      result++
    }
  }
  
  return result
};