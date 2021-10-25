// 14> Array-1 -- makeLast
// Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more.

function makeLast(nums){
    let arr = [];
    arr.length = nums.length * 2;
    arr[arr.length - 1] = nums[nums.length - 1];
    for(let i = 0; i < arr.length - 1; i++)
      arr[i] = 0;
    return arr;
}
console.log(makeLast([4, 5, 6]));