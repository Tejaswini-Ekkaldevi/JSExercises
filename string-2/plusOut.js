// 14> String-2 -- plusOut
// Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.
function plusOut(str, word)
{
    let result = "";
    let temp = "";
    let j = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) != word.charAt(j)){
          result = result + "+";
        if(temp.length!=0){
          for(let k = 0; k < temp.length; k++){
            result = result + "+";
          }
        }
        temp = "";
        j = 0;
       } 
       else {
          temp = temp + str.charAt(i);
          if(word.length == temp.length){
            result = result + temp;
            j = 0;
            temp = "";
           } 
           else {
              j++;
           }
        }
    }
    return result;
}
  
console.log(plusOut('12xy34', 'xy'));