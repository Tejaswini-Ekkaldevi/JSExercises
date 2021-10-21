// 2> String-2 -- countHi
// Return the number of times that the string "hi" appears anywhere in the given string.
function countHi(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
      if(str.charAt(i) + str.charAt(i+1) === 'hi'){
        count++;
      }
    }
    return count;
  }
  console.log(countHi('ABChi hi'));
