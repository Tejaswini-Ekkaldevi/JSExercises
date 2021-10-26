// 10> AP-1 -- scoreUp
// The "key" array is an array containing the correct answers to an exam, like {"a", "a", "b", "b"}. 
// The "answers" array contains a student's answers, with "?" representing a question left blank. 
// The two arrays are not empty and are the same length. 
// Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer.
function scoreUp(key, answers){
    let marks = 0;
    for(let i =0; i < key.length; i++){
      if(key[i] === answers[i]){
        marks += 4;
      }
      else if(answers[i] === '?'){
        marks -= 0;
      }
      else if(key[i] !== answer[i]){
        marks -= 1;
      }
      else{ 
        return 0;
      }
    }
    return marks;
}
