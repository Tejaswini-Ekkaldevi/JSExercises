// 1> String-3 -- withoutString
// Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

function withoutString(base, remove){
    let s1 = remove.toLowerCase();
    let s = '';
    s = base.replaceAll(s1, '');
    return s;
}

console.log(withoutString('Hello There', 'llo'));