// 1> AP-1 -- scoresIncreasing
// Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.
function scoresIncreasing(scores){
    let equal = false;
    for (let i = 0; i < scores.length - 1; i++){
      if(scores[i] <= scores[i + 1])
        equal = true;
      else
        return false;
    }   
    return equal;
}
