// 18> Array-1 -- biggerTwo
// Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

function biggerTwo(a, b){
    let sumA = a[0] + a[1];
    let sumB = b[0] + b[1];
    if(sumA === sumB)
      return a;
    if(sumA > sumB)
      return a;
    else
      return b;
}
console.log(biggerTwo([1, 2], [3, 4]));