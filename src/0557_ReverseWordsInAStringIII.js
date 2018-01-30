/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').map(function(item){
      return item.split('').reverse().join('')
  }).join(' ')
};