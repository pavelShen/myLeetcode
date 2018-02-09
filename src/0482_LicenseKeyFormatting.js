/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  let result = []
  let temp = S.replace(/-/g,'').toUpperCase().split('').reverse(); // [g,t,f,f,e,d,c,b,a]
  for(let i=0;i<temp.length;i++){
    if(i % K===0 && i!==0){
      result.push('-')
    }
    result.push(temp[i])
  }
  return result.reverse().join('')
};