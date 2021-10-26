// 15> Recursion-1 -- pairStar
// Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".

function pairStar(str){
    if(str.length < 2)
      return str;
    if(str.charAt(0) === str.charAt(1))
      return str.charAt(0) + '*' + pairStar(str.substring(1));
    return str.charAt(0) + pairStar(str.substring(1))
}