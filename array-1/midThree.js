// 22> Array-1 -- midThree
///Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.

function midThree(nums){
    let len = nums.length/2;
    let newArr= [];
    if(nums.length === 3)
      return nums;
    else
      newArr = [nums[len -1] , nums[len], nums[len + 1]];
      return newArr;
}

// Not All test cases passed.