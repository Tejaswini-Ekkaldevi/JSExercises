// 3> Array-2 -- bigDiff
// Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.

function bigDiff(nums){
    let max = nums[0];
    let min = nums[0];
    
    for(let i = 0; i < nums.length; i++){
      max = Math.max(max, nums[i]);
      min = Math.min(min, nums[i]);
    }
    return max - min;
}
console.log(bigDiff([4, 5, 2, 8, 9]));