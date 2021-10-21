// 16> String-1 -- minCat
// Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

function minCat(a, b){
  let a1 = a.length - b.length;
  let b1 = b.length - a.length;
  if(a.length === b.length){
    return a + b;
  }
  else if(a.length >  b.length){
    return a.substring(a1,a.length) + b;
  }
  else{
    return a + b.substring(b1, b.length);
  }
}

console.log(minCat('abc', 'ab'));