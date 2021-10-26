// 3> Map-1 -- mapAB
// Modify and return the given map as follows: for this problem the map may or may not contain the "a" and "b" keys. 
// If both keys are present, append their 2 string values together and store the result under the key "ab".
function mapAB(someMap){
    if(someMap.has('a') && someMap.has('b')){
      let tmp = someMap.get('a') + someMap.get('b');
      someMap.set('ab', tmp);
    }
    return someMap;
}
