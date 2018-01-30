/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index = 0
  let len = nums.length
  
  if(len < 2){
      return nums
  }
  
  for(let i=1;i<len;i++){
      if(nums[index]!==nums[i]){
          index++;
      nums[index] = nums[i];
      }
  }
  
  return index+1;
};