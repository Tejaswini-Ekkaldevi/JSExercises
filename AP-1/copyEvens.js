// 11> AP-1 -- copyEvens
// Given an array of positive ints, return a new array of length "count" containing the first even numbers from the original array. 
// The original array will contain at least "count" even numbers.
function copyEvens(nums, count){
    let counter = 0;
    let arr = [count];
    for(let i =0; i < nums.length; i++){
      if(nums[i] % 2 === 0){
        arr[counter] = nums[i];
        counter++;
      }
      if(counter === count)
        return arr;
    }
    return nums;
}
