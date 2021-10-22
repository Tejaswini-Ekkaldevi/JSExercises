// 17> Logic-1 -- lastDigit
// Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.
function lastDigit(a, b){
    if(a % 10 === b % 10)
      return true;
    else
      return false;
}
console.log(lastDigit(7, 27));
