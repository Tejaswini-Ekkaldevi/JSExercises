// 18> String-1 -- withoutX
// Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

function withoutX(str){
  let a = str.length;
  if(str.substring(0,1) === 'x') {
    return str.substring(1,a);
  }
  else if( str.substring(a-1,a) === 'x'){
    return str.substring(0, a-1);
  }
  else if((str.substring(0,1)) === 'x' && (str.substring(a-1,a)) === 'x'){
  // else if((str.charAt(0) === 'x') && (str.chatAt(a-1) === 'x')){  
    return str.substring(0, a-1);
  }
  else
    return str;
}

console.log(withoutX('xHii'));