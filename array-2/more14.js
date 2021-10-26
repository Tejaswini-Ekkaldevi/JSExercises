// 10> Array-2 -- more14
// Given an array of ints, return true if the number of 1's is greater than the number of 4's

function more14(nums){
    let count1 = 0;
    let count4 = 0
    for(let i = 0; i < nums.length; i++){
      if(nums[i] === 1)
        count1 += 1;
      if(nums[i] === 4)
        count4 += 1;
    }
    if(count1 > count4)
      return true;
   
    return false;
}
console.log(more14([1, 4, 1, 1, 5]));