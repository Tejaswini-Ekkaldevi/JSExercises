// 8> Warmup-2 -- noTriples
// Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

function noTriples(nums){
  for(let i = 0; i < nums.length - 2; i++){
      if(nums[i] === nums[i+1] && nums[i] === nums[i+2]){
        return false;
      }
  }
  return true;
}

console.log(noTriples([4, 2 , 2, 5, 1 ]));