// 6> Array-1 -- rotateLeft3
// Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.
function rotateLeft3(nums){
    let a = [];
    a[0] = nums[1];
    a[1] = nums[2];
    a[2] = nums[0];
    return a;
}
console.log(rotateLeft3([1, 2, 3]));
