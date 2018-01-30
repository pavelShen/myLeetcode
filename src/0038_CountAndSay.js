/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var arr = ['1']
  for(var i=1;i<=n-1;i++){
    let prevNum = arr[i-1]
    arr.push(getNextVal(prevNum))
  }
  
  return arr[n-1]
};

function getNextVal(str){
  var count = 1
  var result = ''
  for(let i=0;i<str.length;i++){
    if(str[i] === str[i+1]){
      count++
    } else {
      result += count + str[i]
      count = 1
    }
  }
  
  return result
}