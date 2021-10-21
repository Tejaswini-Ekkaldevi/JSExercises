// 5> Warmup-2 -- last2
// Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

function last2(str){
  let a = str.length;
  let cnt = 0;
  let last = str.substring(a-2);
  if(a <= 2){
    return 0;
  }
  for(let i = 0; i < a; i++){
    if((str.charAt(i) + str.charAt(i+1)) === last){
      cnt += 1;
    }
  }
  return cnt - 1 ;
}

console.log(last2('Sam'));