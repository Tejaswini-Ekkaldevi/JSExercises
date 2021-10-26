// 10> Recursion-1 -- changeXY
// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

function changeXY(str){
    let s = str.indexOf("x");
  
    if (s == -1)
      return str;
  
    if (s == 0)
      return changeXY("y"+str.substring(1));
    else if (s == str.length-1)
      return changeXY(str.substring(0, str.length-1)+"y");
    else{
      return changeXY(str.substring(0, s)+"y"+str.substring(s + 1, str.length));
    }
}
