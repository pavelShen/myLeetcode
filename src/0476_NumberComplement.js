/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let result = getNegate(num.toString(2))
  return parseInt(result,2) 
};

function getNegate(str){
  return str.split('').map((item)=>{
    return parseInt(item)===0 ? 1 : 0
  }).join('')
}
