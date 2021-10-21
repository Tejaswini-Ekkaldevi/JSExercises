// 6> String-2 -- repeatEnd
// Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.
function repeatEnd(str, n){
    let s = '';
    for(i = 0; i < n; i++){
      s += str.substring(str.length-n, str.length);
    }
    return s;
  }

  console.log(repeatEnd('Hello', 3));
