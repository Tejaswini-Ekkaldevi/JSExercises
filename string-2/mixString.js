// 5> String-2 -- mixString
// Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.
function mixString(a, b){
    let s = '';
    let i = 0;
    while(i<a.length && i<b.length){
      s = s + a.charAt(i) + b.charAt(i);
      i++;
    }
    return s + a.substring(i) + b.substring(i);
  }

  console.log(mixString('Hi','Welcome'));
 