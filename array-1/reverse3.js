// 7> Array-1 -- reverse3
// Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

function reverse3(nums){
    let a = [];
    a[0] = nums[2];
    a[1] = nums[1];
    a[2] = nums[0];
    return a;
}
console.log(reverse3([5, 11, 9]));