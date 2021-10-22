// 18> Logic-1 -- lessBy10
// Given three ints, a b c, return true if one of them is 10 or more less than one of the others.
function lessBy10(a, b, c){
    let max1 = Math.max(a, b);
    max1 = Math.max(max1, c);
    if(max1 - a >= 10 || max1 - b >= 10 || max1 - c >= 10)
      return true;
    else
      return false;
}

console.log(lessBy10(1, 7, 11));
