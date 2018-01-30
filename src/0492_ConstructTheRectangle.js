/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let result = []
  let sqrt = Math.sqrt(area)
  
  if(sqrt % 1===0){
    return [sqrt,sqrt]
  }
  
  for(let L = Math.floor(sqrt);L<=area;L++){
    let W = area / L
    if((W % 1 === 0)  && (L >= W) ){
      return [L,W]
    }
  }
};