// 5> String-3 -- maxBlock
// Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.
function maxBlock(str){
    let len = str.length;
    let count = 0;
    let tmpcnt = 1;
    if (len == 0)
      return 0;
    for (let i = 0; i < len; i++) {
      if (i < len-1 && str.charAt(i) == str.charAt(i+1))
        tmpcnt++;
      else
        tmpcnt = 1;
      if (tmpcnt > count)
        count = tmpcnt;
    }
    return count;
}
console.log(maxBlock('hoopla'));
  

