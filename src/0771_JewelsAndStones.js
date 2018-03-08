/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let result = 0
    let typeArr = J.split('')
    S.split('').forEach((item)=>{
      if(typeArr.indexOf(item)>=0){
        result++
      }
    })
    
    return result
  };