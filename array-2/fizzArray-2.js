// 14> Array-2 -- fizzArray2
// Given a number n, create and return a new string array of length n, containing the strings "0", "1" "2" .. through n-1. N may be 0, in which case just return a length 0 array. Note: String(xxx) will make the String form of most types.

function fizzArray2(n){
    let myArray = [n];
      if(n === 0)
        return [];
      for(let i = 0; i < n ; i++)
      {
        myArray[i] = i.toString();
      }
      return myArray;
}