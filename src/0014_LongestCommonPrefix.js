var longestCommonPrefix = function(strs) {
  var result = strs[0] || ''
  for(let i=1;i<strs.length;i++){
    for(let j=0;j<strs[0].length;j++){
      if(result.charAt(j)!==strs[i][j]){
        result = result.slice(0,j);
        break;
      }
    }
  }
  return result
};