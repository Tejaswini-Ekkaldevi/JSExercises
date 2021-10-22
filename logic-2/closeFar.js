// 6> Logic-2 -- closeFar
// Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.
function closeFar(a, b, c){
    let a1 = Math.abs(a - b);
    let a2 = Math.abs(a - c);
    let a3 = Math.abs(b - c);
    
    if(a1 <= 1 && a2 >= 2 && a3 >= 2)
      return true;
    else if(a1 >= 2 && a2 <= 1 && a3 >= 2)
      return true
    else
      return false
}

console.log(closeFar(1, 2, 10));
