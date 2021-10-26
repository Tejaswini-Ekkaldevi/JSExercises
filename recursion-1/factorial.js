// 1> Recursion-1 -- factorial
// Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).

function factorial(n){
    if(n === 0)
      return 1;
    else
      return (n* factorial(n - 1));
}
let fact = 1;
let num = 4;
fact = factorial(num);
console.log('Factorial of '+num+ 'is '+fact);