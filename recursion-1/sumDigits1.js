// 6> Recursion-1 -- sumDigits1
// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].

function sumDigits1(n){
    if(n < 10)
      return n;
    if(n > 1)
      let n1 = n % 10;
      let n2 = Math.floor(n/ 10);
      return n1 + sumDigits1(n2);
}
console.log(sumDigits1(67));