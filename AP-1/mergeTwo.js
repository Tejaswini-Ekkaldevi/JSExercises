// 14> AP-1 -- mergeTwo
// Start with two arrays of strings, A and B, each with its elements in alphabetical order and without duplicates. 
// Return a new array containing the first N elements from the two arrays. 
// The result array should be in alphabetical order and without duplicates. A and B will both have a length which is N or more. 
// The best "linear" solution makes a single pass over A and B, taking advantage of the fact that they are in alphabetical order, copying elements directly to the new array.

function mergeTwo(a, b, n){
    let arr = [n];
    let aindex =0, bindex=0;
    for(let i=0; i<n; i++)
    {
      if( a[aindex] === ( b[bindex] ))
        let cmp = 0;
      else if(a[aindex] > ( b[bindex] ))
        cmp = 1;
      else
        cmp = -1;
      
      if(cmp<=0)
      {
        arr[i] = a[aindex++];
        if(cmp == 0) bindex++;
      }
      else
      {
        arr[i] = b[bindex++];
      }
    }
    return arr;
}