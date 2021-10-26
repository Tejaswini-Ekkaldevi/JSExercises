// 12> Recursion-1 -- noX
// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function noX(str){
    let s = str.indexOf("x");
      if (s == -1)
        return str;
      return noX(str.substring(0,s) + "" + str.substring(s + 1))
}