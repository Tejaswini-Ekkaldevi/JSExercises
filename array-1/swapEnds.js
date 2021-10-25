// 21> Array-1 -- swapEnds
// Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

function swapEnds(nums){
    let temp ;
    temp = nums[0];
    nums[0] = nums[nums.length - 1];
    nums[nums.length - 1] = temp;
    return nums;
}
console.log(swapEnds([1, 2, 3, 4]));