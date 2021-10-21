// 8> String-2 -- repeatSeparator
// Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.
function repeatSeparator(word, sep, count){
    let s = '';
    for(let i = 0; i < count; i++){
      if(i < count - 1)
        s += word + sep;
      else
        s += word ;
    }
    return s;
  }

  console.log(repeatSeparator('This','And',3));
