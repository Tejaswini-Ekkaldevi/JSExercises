// 4> String-3 -- mirrorEnds
// Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. In other words, zero or more characters at the very begining of the given string, and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".
function mirrorEnds(string){
    let s = '';
    let len = string.length;
    for(let i =0; i < len; i++){
      if(string.charAt(i) === string.charAt(len - 1 -i)){
        s += string.charAt(i);
      }
      else
      {
        return s;
      }
    }
    return s;
}

console.log(mirrorEnds('abXYZba'));
