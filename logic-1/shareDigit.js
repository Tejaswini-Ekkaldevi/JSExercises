// 23> Logic-1 -- shareDigit
// Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. 
// (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)
function shareDigit(a, b){
    aL = a / 10;
    aR = a % 10;
    bL = b / 10;
    bR = b % 10;
    if (aL === bL || aL === bR || aR === bL || aR === bR){
      return true;
    }
    else{
      return false;
    }
}
console.log(shareDigit(45, 52));
