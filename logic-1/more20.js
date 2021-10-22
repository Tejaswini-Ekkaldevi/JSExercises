// 8> Logic-1 -- more20
// Return true if the given non-negative number is 1 or 2 more than a multiple of 20.
function more20(n){
    if(n % 20 === 1 || n % 20 === 2)
      return true;
     else
       return false;
  }

  console.log(more20(21));
