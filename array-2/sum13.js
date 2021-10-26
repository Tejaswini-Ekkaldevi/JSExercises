// 5> Array-2 -- sum13
// Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

function sum13(nums){
    let sum = 0;
    if(nums.length === 0)
      return 0;
    for(let i = 0; i < nums.length; i++)
    {
        if (nums.length>0) {
          if (nums[i] < 13 || nums[i] > 13) 
             sum += nums[i];
          else 
             i++;
        }
    }
    return sum;
}
console.log(sum13([4, 13, 1, 2, 5]));