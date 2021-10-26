// 19> Array-1 -- makeMiddle
// Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.

function makeMiddle(nums){
    let len = nums.length / 2;
    if(nums.length === 2)
      return nums;
    else
      let a = [nums[len -1] , nums[len]];
      return a ;
}
console.log(makeMiddle([1, 2, 3, 4]));