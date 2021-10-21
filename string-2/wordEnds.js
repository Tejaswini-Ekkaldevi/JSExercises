// 15> String-2 -- wordEnds
// Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.
function wordEnds(str, word){
    let s = "";
    let len = word.length;
    for (let i = 0; i < str.length; i++) {
        if (str.startsWith(word, i)) {
          s += ( (i-1) >= 0 ) ? str.charAt(i-1) : "";
          s += ( (i+len) < str.length ) ? str.charAt(i+len) : "";
        }
    }
    return s;
}
console.log(wordEnds('XY123XY', 'XY'));
