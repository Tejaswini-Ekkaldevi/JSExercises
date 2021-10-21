// 12> String-2 -- oneTwo
// Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of fewer than 3 chars at the end.
function oneTwo(str){
    let s = '';
    for (let i=0; i<str.length-2; i+=3){
      s = s + str.substring(i+1, i+3) + str.charAt(i);
    }
    return s;  
  }

  console.log(oneTwo('abcdefgh'));
