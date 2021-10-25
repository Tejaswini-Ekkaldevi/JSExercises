// 15> Array-1 -- double23
// Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

function double23(nums){
    if(nums.length !== 1 || nums.length !== 0)
      if((nums[0] == 2 && nums[1] == 2) ||
         (nums[0] == 3 && nums[1] == 3 ))
      return true;
    else 
      return false;
}
console.log(double23([3, 4]));