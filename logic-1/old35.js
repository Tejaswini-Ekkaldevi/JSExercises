// 9> Logic-1 -- old35
// Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.
function old35(n){
    a = n % 3;
    b = n % 5;
    if(a === 0 || b === 0)
      if(a !== b)
        return true;
      else 
        return false;
    else
      return false;
}

console.log(old35(15));
