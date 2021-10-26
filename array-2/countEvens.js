// 2> Array-2 -- countEvens
// Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

function countEvens(nums){
    let count = 0;
    for(let i = 0; i < nums.length; i++)
      if(nums[i] % 2 === 0)
        count += 1;
    return count;
}
console.log(countEvens([2, 5, 2, 4]));