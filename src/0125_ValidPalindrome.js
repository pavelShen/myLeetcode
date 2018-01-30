/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
  var s2 = s.split("").reverse().join("")
  if(s===s2){
    return true
  }
  return false
};