/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  var result = 0
  var sortedNums = nums.sort((a,b)=>{
    return a-b
  })

  for(let i=0;i<nums.length;i+=2){
    result += Math.min(nums[i],nums[i+1])
  }
  
  return result
};