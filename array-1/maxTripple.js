// 23> Array-1 -- maxTriple
// Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.

function maxTriple(nums){
    let a = nums[0];
    let b = nums[((nums.length+1)/2) - 1];
    let c = nums[nums.length - 1]
    if(a > b && a > c)
      return a;
    else if(b > a && b > c)
      return b;
    else
      return c;
}
console.log(maxTriple([2, 4, 9, 5, 3]));