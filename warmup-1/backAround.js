// 1> Warmup-1 -- backAround
// Given a string, take the last char and return a new string with the last char added at the front and back, so 'cat' yields 'tcatt' The original string will be length 1 or more.

function backAround(str){
  let a = str.length; 
  return str.substring(a - 1, a) + str + str.substring(a - 1, a);
}
// OR
function backAround1(str){
  let a = str.length; 
  let b = str.charAt(a - 1);
  //return str.substring(a - 1, a) + str + str.substring(a - 1, a);
  return b + str + b;
}

console.log(backAround('Hello'));
console.log(backAround1('Welcome'));