// 5> Array-1 -- sum3
// Given an array of ints length 3, return the sum of all the elements.
function sum3(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++)
      sum += nums[i];
    return sum;
}
console.log(sum3([2, 3, 5]));
