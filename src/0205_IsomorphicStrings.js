/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var convert = function(s){
  let result = ''
  for(let item of s){
    result += s.indexOf(item)
  }
  return result
}

var isIsomorphic = function(s, t) {
    if(convert(s) === convert(t)){
      return true
    }
    else{
      return false
    }
};