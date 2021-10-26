// 4> Array-2 -- centeredAverage
// Return the "centered" average of an array of ints, which we'll say is the mean average of the values, 
// except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, 
// ignore just one copy, and likewise for the largest value. Use int division to produce the final average. 
// You may assume that the array is length 3 or more.

function centeredAverage(nums){
    let sum = 0;
    let max = nums[0];
    let min = nums[0];
  
    for (let i = 0; i < nums.length; i++) {
      min = Math.min(min, nums[i]);
      max = Math.max(max, nums[i]);
      sum = sum + nums[i];
    }
    sum = sum - max;
    sum = sum - min;
  
    return sum / (nums.length - 2);
}
console.log(centeredAverage([4, 7, 3, 2, 1]));