// 3> String-3 -- countTriple
// We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.
function countTriple(str){
    let count = 0;
    let len = str.length;
    for(let i = 0; i < len; i++){
      let temp = str.charAt(i);
      if(temp === str.charAt(i + 1) && temp === str.charAt(i + 2)){
        count ++;
      }
    }
    return count;
}
console.log(countTriple('xxxabyyyycd'));
