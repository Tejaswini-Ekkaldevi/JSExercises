// 7> Array-2 -- has22
// Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.

function has22(nums){
    for(let i = 0; i < nums.length; i++)
      if(nums[i] === nums[i + 1])
        return true;
    return false;
}
console.log(has22([1, 2, 2, 4]));