// 17> String-1 -- startWord
/* Given a string and a second "word" string, we'll say that the word matches the string 
if it appears at the front of the string, except its first char does not need to match exactly. 
On a match, return the front of the string, or otherwise return the empty string. 
So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1. */
function startWord(str, word){
  let strlen = str.length;
  let wordlen = word.length;
  if(strlen === 0){
    return '';
  }
  if(wordlen === 1){
    return str.substring(0,1);
  }
  else if(str.substring(1,wordlen)===(word.substring(1,wordlen))){
    return str.substring(0, wordlen);
  }
  else{
    return '';
  }
}

console.log(startWord('Hello', 'HelloWorld'));