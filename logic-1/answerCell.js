// 12> Logic-1 -- answerCell
// Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.
function answerCell(isMorning, isMom, isAsleep){
    if(isAsleep)
      return false;
    if((isMorning && isMom) || !isMorning)
      return true;
    else 
      return false;
}

console.log(answerCell(true, false, false));
