// 13> Array-1 -- no23
// Given an int array length 2, return true if it does not contain a 2 or 3.

function no23(nums){
    if(nums[0] === 2 || nums[1] === 2 ||
         nums[0] === 3 || nums[1] === 3)
      return false;
    else
      return true;
}
console.log(no23([2,5]));