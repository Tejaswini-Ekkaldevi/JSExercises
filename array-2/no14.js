// 15> Array-2 -- no14
// Given an array of ints, return true if it contains no 1's or it contains no 4's.

function no14(nums){
    let  ones = false;
    let  four = false;
    for(let i = 0; i < nums.length; i++)
    {
      if(nums[i] === 1)
        ones = true;
      if(nums[i] === 4)
        four = true;
    }
    if(ones && four)
       return false;
    else
      return true;
}
console.log(no14([2, 3, 4, 1]));