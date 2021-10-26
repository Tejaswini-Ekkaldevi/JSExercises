// 8> Array-1 -- maxEnd3
// Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

function maxEnd3(nums){
    let len = nums.length;
    let a = [nums[0], nums[0], nums[0]]
    let b = [ nums[len - 1], nums[len - 1],  nums[len - 1]]
    if(nums[0] > nums[len - 1])
      return a;
    else
      return b;
}

console.log(maxEnd3([3, 5, 4]));