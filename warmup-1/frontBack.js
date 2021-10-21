// 6> Warmup-1 -- frontBack
// Given a string, return a new string where the first and last chars have been exchanged.

function frontBack(str){
  let a = str.length;
  if(str.length < 2){
    return str;
  }
  else{
    return str.substring(a-1,a)+str.substring(1,a-1)+str.substring(0,1);
  }
}

console.log(frontBack('Welcome'));
