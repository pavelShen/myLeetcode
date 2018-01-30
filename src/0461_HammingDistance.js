/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  x = [].slice.call(x.toString(2))
  y = [].slice.call(y.toString(2))
  
  let xLength = x.length
  let yLength = y.length
  let longerLength = xLength > yLength ? xLength : yLength
  let result = 0
  
  for(let i=0;i<longerLength-xLength;i++){
    x.unshift('0')
  }

  for(let i=0;i<longerLength-yLength;i++){
    y.unshift('0')
  }
  
  for(let i=0;i<longerLength;i++){
    if(x[i]!==y[i]){
      result ++
    }
  }

  return result
};