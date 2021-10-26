// 6> Array-2 -- sum67
// Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

function sum67(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++)
    {
       if(nums[i] === 6)
          while(nums[i] !== 7)
            i++;
        else
          sum += nums[i];
    }
    return sum;
}
console.log(sum67([2, 5, 6, 4, 7, 3, 1]));