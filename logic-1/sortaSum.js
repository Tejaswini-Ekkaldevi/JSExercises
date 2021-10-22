// 4> Logic-1 -- sortaSum
// Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.
function sortaSum(a, b){
    let sum = a + b;
    if(sum >= 10 && sum <= 19)
      return 20;
    else
      return sum;
}

console.log(sortaSum(10,2));
