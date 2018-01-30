var isPalindrome = function(x) {
  let prefix = x < 0 ? '-' : ''
  let result = Math.abs(x).toString().split('').reverse().join('')
  
  if(prefix==='-'){
      return false
  }
  
  return x.toString() === result
};