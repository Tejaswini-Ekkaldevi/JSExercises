// 1> Array-2 -- findLowestIndex
// Return the index of the minimum value in an array. The input array will have at least one element in it.
function findLowestIndex(nums){
    let index = 0;
    let min = nums[index];
    for(let i = 1; i < nums.length; i++){
      if(nums[i] <= min){
        min = nums[i];
        index = i;
      }
    }
    return index;
}
console.log(findLowestIndex([2, 5, 7, 1]));
