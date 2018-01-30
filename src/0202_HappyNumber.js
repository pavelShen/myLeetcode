/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n,temp) {
  if(n===1) return true
  
  let result = 0
  temp = temp || []
  
  for(let item of n.toString()){
    item = parseInt(item)
    result += Math.pow(item,2)
  }
  
  if(temp.indexOf(result)!==-1){
    return false
  }
  else{
    temp.push(result)
    return isHappy(result,temp)
  }
  
};