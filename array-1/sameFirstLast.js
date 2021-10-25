// 2> Array-1 -- sameFirstLast
// Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.
function sameFirstLast(nums){
    for(let i = 0; i < nums.length; i++){
      if(nums[0] === nums[nums.length-1]){
        return true;
      }
      else
        return false;
    }
      return false;
}
console.log(sameFirstLast([1, 2, 3, 1]));
