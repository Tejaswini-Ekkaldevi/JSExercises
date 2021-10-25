// 25> Array-1 -- unlucky1
// We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

function unlucky1(nums){
    let len = nums.length;
    if (len < 2) {
      return false;
    } 
    else if ((nums[0] == 1 && nums[1] == 3) || 
             (nums[len-2] == 1 && nums[len-1] == 3)) {
      return true;
    } 
    else if (len > 2 && nums[1] == 1 && nums[2] == 3) {
      return true;
    } 
    else
      return false;
}
console.log(unlucky1([1, 3, 5, 7]));