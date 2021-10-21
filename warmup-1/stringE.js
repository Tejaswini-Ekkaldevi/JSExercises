// 3> Warmup-1 -- stringE
// Return true if the given string contains between 1 and 3 'e' chars.

function stringE(str){
  let cnt = 0;
  for (let i = 0; i < str.length; i++){
    if(str.charAt(i) === 'e'){
      cnt += 1;
    }
  }
  if(cnt >= 1 && cnt <= 3){
    return true;
  }
  else
    return false
}

console.log(stringE('Hello'));
