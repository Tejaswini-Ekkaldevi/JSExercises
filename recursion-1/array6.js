// 13> Recursion-1 -- array6
// Given an array of ints, compute recursively if the array contains a 6. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.
function array6(nums, i){
    if(i >= nums.length)
      return false;
    if(nums[i] === 6)
      return true;
    else
      return array6(nums, i + 1);
}
