// 6> AP-1 -- wordsFront
// Given an array of strings, return a new array containing the first N strings. N will be in the range 1..length.

function wordsFront(words, n){
    let s = [n];
    for(let i = 0; i < n; i++){
      s[i] = words[i];
    }
    return s;
}
console.log(wordsFront(['a', 'b', 'c', 'd'], 2));