// 2> AP-1 -- scores100
// Given an array of scores, return true if there are scores of 100 next to each other in the array. The array length will be at least 2.
function scores100(scores){
    for(let i = 0; i < scores.length - 1; i++){
      if(scores[i] === 100 && scores[i + 1] === 100)
        return true;
    }
    return false; 
}
