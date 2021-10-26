// 16> Array-2 -- isEverywhere
// We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.

function isEverywhere(nums, val){
    for(let i = 0; i <= nums.length - 2 ; i++)
    {
      if(nums[i] !== val && nums[i + 1] !== val)
        return false;
    }
    return true;
}
console.log(isEverywhere([2, 4, 2, 6, 4, 6]));