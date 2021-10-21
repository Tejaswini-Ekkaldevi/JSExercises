// 7> Warmup-2 -- arrayFront9
// Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

function arrayFront9(nums){
    for(let j = 0; j < 4; j++){
      if(nums[j] === 9){
        return true;
      }
    }
    return false;
}

console.log(arrayFront9([4, 9, 3, 9, 6, 9, 2 ]));