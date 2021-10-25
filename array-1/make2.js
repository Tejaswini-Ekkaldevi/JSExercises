// 26> Array-1 -- make2
// Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.

function make2(a, b){
    let newArr = [];
    let index = 0;
    for(let i = 0; i < a.length; i++)
      if(index < 2){
        newArr[index]=a[i];
        index++;
      }
    for(let i = 0; i < b.length; i++)
      if(index < 2){
        newArr[index]=b[i];
        index++;
      }
  return newArr;
}
console.log(make2([4, 5], [3, 2, 1]));