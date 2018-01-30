/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // var result = 0
  // if(num<10) return num
  // for(let item of num.toString()){
  //   result += parseInt(item)
  // }
  // return addDigits(result)
  
  // 0,1,2,3,...8,9,1,2,3
  return 1 + (num-1) % 9
};