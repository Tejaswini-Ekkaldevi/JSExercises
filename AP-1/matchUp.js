// 9> Array-2 -- matchUp
// Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal.

function matchUp(a, b){
    let count = 0;
    for(let i = 0; i < a.length; i++)
    {
      if(a[i] === b[i])
        return 0;
      if(a[i] > b[i])
        if(a[i] - b[i] <= 2)
          count += 1;
        else
          return 0;
    }
    return count;
}