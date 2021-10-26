// 12> AP-1 -- scoresSpecial
// Given two arrays, A and B, of non-negative int scores. A "special" score is one which is a multiple of 10, such as 40 or 90. 
// Return the sum of largest special score in A and the largest special score in B. 
// To practice decomposition, write a separate helper method which finds the largest special score in an array. 
// Write your helper method after your scoresSpecial() method in the JavaBat text area.
function scoresSpecial(a, b){
    let special1 = largestSpecial(a);
    let special2 = largestSpecial(b);
    return special1 + special2;
  }
  
  function largestSpecial(a){
    let temp = 0;
    for(let i = 0; i < a.length; i++){
      if(a[i] % 10 === 0 && a[i] > temp){
        temp = a[i];
      }
    }
    return temp;
}
