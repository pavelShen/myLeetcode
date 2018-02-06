/**
 * @param {number[]} digits
 * @return {number[]}
 */
// [1,0,9] => [1,1,0]
var plusOne = function(digits) {
  let curry = 0,lastIndex;
  digits.unshift(0)
  lastIndex = digits.length-1
  
  digits[lastIndex]++
  
  while(lastIndex){
    if(digits[lastIndex]=== 10){
      digits[lastIndex] = 0
      curry = 1
      digits[lastIndex-1] += curry
      curry = 0
    }
    
    lastIndex--
  }
  
  
  return digits[0]===0 ? digits.slice(1) : digits
};