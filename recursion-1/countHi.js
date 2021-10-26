// 9> String-2 -- countHi
// Return the number of times that the string "hi" appears anywhere in the given string.

function countHi(str){
    let s =  str.indexOf('hi');
    if(s != -1)
      return 1 + countHi(str.substring(s + 1));
    else
      return 0;
}