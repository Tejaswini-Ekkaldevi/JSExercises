// 1> String-2 -- doubleChar
// Given a string, return a string where for every char in the original, there are two chars.
function doubleChar(str){
    let s = '';
    for(let i = 0; i < str.length; i++){
      s += str.charAt(i) + str.charAt(i);
    }
    return s;
  }

  console.log(doubleChar('The'));
