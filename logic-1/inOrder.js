// 15> Logic-1 -- inOrder
// Given three ints, a b c, return true if b is greater than a, and c is greater than b. However, with the exception that if "bOk" is true, b does not need to be greater than a.

function inOrder(a, b, c, bOk){
    if(c > b  && (b > a || bOk))
      return true;
    else
      return false;
}

console.log(inOrder(4, 5, 8, true))