// 7> Logic-2 -- blackjack
// Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.
function blackjack(a, b){
    if( a > 21 && b > 21)
      return 0;
    else if(a > 21)
      return b;
    else if(b > 21)
      return a;
    let diffA = 21 - a;
    let diffB = 21 - b;
    if(diffA > diffB)
      return b
    else
      return a;
}
console.log(blackjack(19, 22));
