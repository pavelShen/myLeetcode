/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var result = s.split(/\s+/).filter((item)=>{
    return item !== ''
  })
  
  if(result.length>0){
    return result[result.length-1].length
  }
  
  return 0
};