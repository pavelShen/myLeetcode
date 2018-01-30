/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var result = [];
  for(var i=1;i<=n;i++){
      result.push(i)
  }
  return result.map((item)=>{
      var temp = item
      if(temp % 3 === 0){
          item = 'Fizz'
      }
      
      if(temp % 5 === 0){
          item = item.toString().replace(/\d/g,'')
          item += 'Buzz'
      }
      
      return item.toString()
  })
};