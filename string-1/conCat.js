// 13> String-1 -- conCat
// Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

function conCat(a, b){
  if(a.substring(a.length-1,a.length) === b.substring(0,1)){
    return a + b.substring(1, b.length);
  }
  return a + b;
}

console.log(conCat('Hello', 'World'));
