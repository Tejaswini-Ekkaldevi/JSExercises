// 3> String-2 -- endOther
// Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

function endOther(a, b){
    a = a.toLowerCase();
    b = b.toLowerCase();
   
    if (a.endsWith(b)||b.endsWith(a)){
      return true;
    }
    return false;
  }
  console.log(endOther('HiaBc', 'abc'));