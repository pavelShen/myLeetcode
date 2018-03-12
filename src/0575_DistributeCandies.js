/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let half = candies.length/2
    let kind = [...new Set(candies)].length
    let result
    
    if(half <= kind){
      return half
    }
    else{
      return kind
    }
};