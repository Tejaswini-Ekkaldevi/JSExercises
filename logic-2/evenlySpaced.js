// 8> Logic-2 -- evenlySpaced
// Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.
function evenlySpaced(a, b, c){
    let ab = Math.abs(a - b);
    let bc = Math.abs(b - c);
    let ac = Math.abs(a - c);
    if((ab === bc && ac === ab + bc) ||
       (ac === ab && bc === ab + ac) ||
       (bc === ac && ab === bc + ac))
      return true;
    else
      return false;
    
}

console.log(evenlySpaced(4, 6, 2));
