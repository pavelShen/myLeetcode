/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let obj = {
    'U':0,
    'R':0,
    'L':0,
    'D':0,
  }
  let arr = moves.split('')
  
  for(let item of arr){
    obj[item] = obj[item]+1
  }
  
  if((obj['U']-obj['D'])===0 && (obj['L']-obj['R'])===0){
    return true
  }
  
  return false
};