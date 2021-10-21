// 2> Warmup-1 -- max1020
// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

function max1020(a, b){
  if(a >= 10 && a <=20)
    let m = a;
  else
    m = 0;
  
  if(b >= 10 && b <=20)
    let n = b;
  else 
    n = 0;
  
  if(m > n)
    return m;
  else
    return n;
}

console.log(max1020(19,13));