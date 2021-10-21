// 1> Warmup-2 -- stringTimes
// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

function stringTimes(str, n){
  let s = '';
  for (let i = 1; i <= n; i++)
  {
    s += str;
  }
  return s;
}

console.log(stringTimes('Hello', 2));