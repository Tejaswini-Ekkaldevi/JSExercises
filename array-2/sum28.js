// 9> Array-2 -- sum28
// Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.

function sum28(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++)
      if(nums[i] === 2)
        sum += nums[i];
    if(sum === 8)
      return true;
    else 
      return false;
}
console.log(sum28([2, 4, 3, 2, 6]));