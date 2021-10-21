// 9> String-1 -- nTwice
// Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.

function nTwice(str, n){
  return str.substring(0, n) + str.substring(str.length - n, str.length)
}
console.log(nTwice('Hello', 2));