// 21> Logic-1 -- greenTicket
// You have a green lottery ticket, with ints a, b, and c on it. 
// If the numbers are all different from each other, the result is 0. If all of the numbers are the same, the result is 20. 
// If two of the numbers are the same, the result is 10.
function greenTicket(a, b, c){
    if( a !== b && b !== c && a !== c)
      return 0;
    else if(a === b && b === c)
      return 20;
    else 
      return 10;
}

console.log(greenTicket(2, 1, 1));
