// 2> Map-1 -- mapShare
// Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that same value. 
// In all cases remove the key "c", leaving the rest of the map unchanged.
function mapShare(someMap){
    if(someMap.has('a')){
      let tmp = someMap.get('a');
      someMap.set('b', tmp);
    }
    someMap.delete('c');
    return someMap;
}
