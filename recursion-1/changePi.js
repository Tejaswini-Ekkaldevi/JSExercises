// 11> Recursion-1 -- changePi
// Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".

function changePi(str){
    let s = str.indexOf("pi");
    if (s == -1)
      return str;
    return changePi(str.substring(0,s) + "3.14" + str.substring(s + 2));
}