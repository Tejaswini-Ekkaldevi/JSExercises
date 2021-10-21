// 3> Warmup-2 -- doubleX
// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

function doubleX(str){
  for(i = 0; i < str.length; i++){
    if(str[i] === 'x' && str[i+1] === 'x'){
      return true;
    }
    else 
      return false;
  }
  if(str === ''){
    return false;
  }
}

console.log(doubleX('xxaxxb'));