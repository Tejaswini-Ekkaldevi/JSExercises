// 9> String-2 -- prefixAgain
// Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().
function prefixAgain(str, n){
    if(str.lastIndexOf(str.substring(0, n)) != 0)
      return true;
    else
      return false;
}
console.log(prefixAgain('HelloWorldHello', 2));

