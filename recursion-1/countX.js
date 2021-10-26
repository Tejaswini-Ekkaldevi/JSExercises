// 8> Recursion-1 -- countX
// Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

function countX(str){
    let s = str.indexOf('x');
    if(s != -1)
      return 1 + countX(str.substring(s + 1));
    else return 0;
}