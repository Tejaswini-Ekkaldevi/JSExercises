// 2> String-3 -- equalIsNot
// Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

function equalIsNot(str){
    let countIs=0;
    let countNot=0;

    let len=str.length;
    let index=0;

    while (str.indexOf("is",index+2)!=-1)
    { 
      index=str.indexOf("is",index+2);
      countIs++;
    }
    while (str.indexOf("not",index+3)!=-1)
    { 
      index=str.indexOf("not",index+3);
      countNot++;
    }
  return countIs==countNot;
}

console.log(equalIsNot('This is notnot'));