var isValid = function(s) {
  let arr = s.split('');
  if(s.length<2){
    return false
  }
  
  let result = foo(arr)

  if(result.length===0){
    return true;
  }
  else {
    return false;
  }
}

function foo(arr){
  for(let i=0;i<arr.length;i++){
    if( (arr[i]===')' && arr[i-1]==='(') ||  (arr[i]===']' && arr[i-1]==='[') ||  (arr[i]==='}' && arr[i-1]==='{')){
      arr.splice(i-1,2)
      foo(arr)
    }
  }
  return arr;
};