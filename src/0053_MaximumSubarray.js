/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let result = nums[0]
  let temp = [result] //[-2,1,-2,4,4]
  let temp2
  
  for(let i = 1;i<nums.length;i++){
    temp2 = Math.max(nums[i],nums[i] + temp[i-1])
    temp.push(temp2)
    if(temp2>result){
      result = temp2
    }
  }
  
  return result
};