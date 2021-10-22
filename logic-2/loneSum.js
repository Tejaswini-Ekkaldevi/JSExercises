// 2> Logic-2 -- loneSum
// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, 
// it does not count towards the sum.
function loneSum(a, b, c){
    if(a === b && b === c)
      return 0;
    else if(a === b && a !== c )
      return c;
    else if(b === c && b !== a)
      return a;
    else if(a === c && a !== b)
      return b;
    else
      return a + b + c;
}
console.log(loneSum(1, 2, 3));

