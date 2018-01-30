/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if(num===0) return false
  let temp
  for(let i=1;i<=num;i++){
    temp = i * i
    if(temp > num){
      return false
    }
    else if(temp === num){
      return true
    }
  }
};