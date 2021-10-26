// 12> Array-1 -- has23
// Given an int array length 2, return true if it contains a 2 or a 3.
function has23(nums){
    if(nums[0] === 2 || nums[1] === 2 ||
       nums[0] === 3 || nums[1] === 3)
      return true;
    else
      return false;
}
console.log(has23([2, 4]));
