// 16> Recursion-1 -- strCount
// Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping.
function strCount(str, sub){
    let subLen = sub.length;
    if(str.length < subLen)
      return 0;
    if(str.substring(0, subLen) === sub)
      return 1 + strCount(str.substring(subLen), sub);
    return strCount(str.substring(1), sub);
}
