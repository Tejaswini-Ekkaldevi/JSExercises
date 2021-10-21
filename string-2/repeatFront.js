// 7> String-2 -- repeatFront
// Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).
function repeatFront(str, n){
    let s = '';
    for(let i = n; n > 0; n--){
      s += str.substring(0, n);
    }
    return s;
  }

  console.log(repeatFront('Hello', 3));
