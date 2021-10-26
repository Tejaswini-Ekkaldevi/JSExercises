// 14> Recursion-1 -- allStar
// Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".
function allStar(str){
    if(str.length < 2)
      return str;
    return str.charAt(0) + '*' + allStar(str.substring(1));
}
