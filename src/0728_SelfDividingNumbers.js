/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let result = []
  for(let i=left;i<=right;i++){
    let arr = i.toString().split('') //[1,2,8] //string
    if(arr.indexOf("0")===-1){
      let temp = 0;
      for(let j=0;j<arr.length;j++){
        if(i%parseInt(arr[j])===0){
          temp++
        }
      }
      if(arr.length===temp){
        result.push(i)
      }
    }
  }
  
  return result
};