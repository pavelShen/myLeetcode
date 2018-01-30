/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  var lines = [
     ['q','w','e','r','t','y','u','i','o','p'],
     ['a','s','d','f','g','h','j','k','l'], 
     ['z','x','c','v','b','n','m'], 
  ]
  var result = []
  for(let item of words){
      let wordSplit = item.toLowerCase().split('') //[h,e,l,l,o]
      for(let line of lines){
          if(isInLine(wordSplit,line)){
              result.push(item)
          }
      }
  }
  
  return result
};

function isInLine(wordSplit,line){
  return wordSplit.every((item)=>{
      return line.indexOf(item) !== -1
  })
}