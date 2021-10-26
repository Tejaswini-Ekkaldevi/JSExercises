// 5> AP-1 -- wordsCount
// Given an array of strings, return the count of the number of strings with the given length.

function wordsCount(words, len){
    let count = 0;
    for(let i = 0; i < words.length; i++){
      if(words[i].length === len)
        count += 1;
    }
    return count;
}