/**
 * @param {number} x
 * @return {number}
 */
// Infinity
var reverse = function(x) {
  let prefix = x < 0 ? '-' : ''
  let result = parseInt(Math.abs(x).toString().split('').reverse().join(''),10)
  
  if(result>Math.pow(2,31)-1){
      return 0
  }
  else {
      return parseInt(prefix + result,10)
  }
};