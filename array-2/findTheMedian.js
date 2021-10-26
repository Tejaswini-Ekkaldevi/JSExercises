// 18> Array-2 -- findTheMedian
// Write a method that returns the median value of an array. The input array will never be empty. If the array is odd in length, the median is the value in the centre of the array. If the array is even, the median should be the average of the two middle values. Hint: You will need to ensure the input array is sorted - there is a sort() array method you can use for this step.

function findTheMedian(nums){
    let n = nums.sort();
    for(let i = 0; i < n.length; i++){
      if(n.length % 2 === 0){
        let first = n[n.length / 2 - 1];
        let second = n[n.length / 2];
        return (first + second) / 2;
      }
      else {
        let mid = Math.floor(nums.length/2);
         return nums[mid]; 
      }
    }
  }

  // Not all Test cases are passed