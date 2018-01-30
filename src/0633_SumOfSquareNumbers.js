/**
 * @param {number} c
 * @return {boolean}
 */
// var judgeSquareSum = function(c) {
  // let temp
  // let sqrtNum = Math.sqrt(c)
  // if(sqrtNum===parseInt(sqrtNum)) return true
  // for(let i=1;i<=c;i++){
  //   for(let j=i;j<=c;j++){
  //     temp = i*i + j*j
  //     if(temp===c){
  //       return true
  //     }
  //   }
  // }
  // return false
// };

var judgeSquareSum = function(c) {
  let temp
  if(isSqrtNum(c)) return true
  for(let i=1;i<=c;i++){
    temp = c - i * i
    if(temp<0) return false
    if(isSqrtNum(temp)){
      return true
    }
  }
  return false
};

function isSqrtNum(num){
  let sqrtNum = Math.sqrt(num)
  if(sqrtNum===parseInt(sqrtNum)) return true
  return false
}