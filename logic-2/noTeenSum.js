// 4> Logic-2 -- noTeenSum
// Given 3 int values, a b c, return their sum. However, if any of the values is a teen --
// in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. 
//Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. 
//In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). 
// Define the helper below and at the same indent level as the main noTeenSum().
function noTeenSum(a, b, c){
    return fixTeen(a) + fixTeen(b) + fixTeen(c);
  }
  function fixTeen(n){
    if(n >= 13 && n < 15 || n > 16 && n <= 19)
      return 0;
    else 
      return n
}

console.log(noTeenSum(2, 13, 1));
