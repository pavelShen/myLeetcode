/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 
 */
var addBinary = function(a, b) {
  let result = []
  let carry = 0
  let arrA = a.split('').map((item)=>{
    return parseInt(item)
  })
  let arrB = b.split('').map((item)=>{
    return parseInt(item)
  })
  let diff = Math.abs(arrA.length - arrB.length)
  
  for(let i=0;i<diff;i++){
    if(arrA.length>arrB.length){
      arrB.unshift(0)
    }
    else{
      arrA.unshift(0)
    }
  }
  
  for(let i=arrA.length-1;i>=0;i--){
    let temp = carry + arrA[i] + arrB[i]
    if(temp===0 || temp===1){
      result.unshift(temp)
      carry = 0
    } else if(temp===2){
      result.unshift(0)
      carry = 1
    } else if(temp===3){
      result.unshift(1)
      carry = 1
    }
  }
  
  if(carry===1){
    result.unshift(1)
    carry = 0
  }
  
  return result.join('')
};