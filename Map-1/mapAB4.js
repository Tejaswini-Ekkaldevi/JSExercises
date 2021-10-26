// 9> Map-1 -- mapAB4
// Modify and return the given map as follows: if the keys "a" and "b" have values that have different lengths, then set "c" to have the longer value. If the values exist and have the same length, change them both to the empty string in the map.

function mapAB4(someMap){
    if (someMap.has("a") && someMap.has("b")) {
     let a = someMap.get("a");
     let b = someMap.get("b");
     if(a.length > b.length) {
       someMap.set("c", a);
     }
     else if (b.length > a.length) { 
       someMap.set("c", b);
     }
     else { 
       someMap.set("a", "");
       someMap.set("b", "");
     }
   }
   return someMap;
}