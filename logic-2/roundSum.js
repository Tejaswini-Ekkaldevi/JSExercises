// 5> Logic-2 -- roundSum
// For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20.
//  Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().

function roundSum(a, b, c){
    return round10(a) + round10(b) + round10(c);
  }
  function round10(num){
    if(num % 10 >= 5)
      return num + (10 -(num % 10 ));
    else
      return num - (num % 10)
}

console.log(roundSum(16, 17, 18));