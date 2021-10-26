// 1> Array-1 -- firstLast6
// Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
function firstLast6(nums){
    for(let i = 0; i < nums.length; i++){
      if(nums[0] === 6 || nums[nums.length - 1] === 6)
        return true;
      else 
        return false;
    }
}
console.log(firstLast6([6, 1, 4]));
