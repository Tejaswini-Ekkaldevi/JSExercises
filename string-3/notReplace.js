// 7> String-3 -- notReplace
// Given a string, return a string where every appearance of the lowercase word "is" has been replaced with "is not". The word "is" should not be immediately preceeded or followed by a letter -- so for example the "is" in "this" does not count. (Note: Character.isLetter(char) tests if a char is a letter.)

function notReplace(str){
    for(let i = 0; i < str.length; i++){ 
      if(str.charAt(i)+ str.charAt(i+1) === 'is')
        return str.replaceAll('is','is not');
    }
    return str;
}