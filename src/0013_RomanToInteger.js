var romanToInt = function(s) {
  // DCXXI
  var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  let result = 0
  for(let i=0,len=s.length;i<len;i++){
      if(data[s[i]]<data[s[i+1]]){
          result = result - data[s[i]] 
      }
      else{
          result += data[s[i]]
      }
  }
  return result
};