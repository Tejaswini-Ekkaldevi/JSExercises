// 11> Array-1 -- makeEnds
// Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.
function makeEnds(nums){
    let arr = [];
    arr.push(nums[0]);
    arr.push(nums[nums.length-1]);
    return arr;
}
console.log(makeEnds([4, 5, 6]));
