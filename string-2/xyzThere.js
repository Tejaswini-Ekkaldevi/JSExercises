// 4> String-2 -- xyzThere
// Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

function xyzThere(str){
    let i = -1;
    while ((i = str.indexOf("xyz", i + 1 )) != -1) {
        if (i == 0 || (str.charAt(i-1) != '.')) {
            return true;
        }
    }
    return false;
}

console.log(xyzThere('abcxyz'));
