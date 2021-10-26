// 17> Array-2 -- either24
// Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.

function either24(nums){
    let two = 0;
    let four = 0;
    for(let i = 0;i < nums.length; i++)
    {
      if(nums[i] === 2 && nums[i + 1] === 2)
        two += 1;
      if(nums[i] === 4 && nums[i + 1] === 4)
        four += 1;
    }
    if(two != 0 && four != 0)
      return false;
    else if(two != 0 || four != 0)
      return true;
    else
      return false;
}
console.log(either24([2, 2, 5, 6, 8]));