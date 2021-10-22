// 9> Logic-2 -- makeChocolate
// We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.

function makeChocolate(small, big, goal){
    let rem = goal % 5;
    if(small + (big * 5) < goal)
      return -1;
    else if(rem <= small && goal - big * 5 > 4)
      return rem + 5;
    else if(rem <= small)
      return rem;
    else
      return -1;
}
console.log(makeChocolate(4, 1, 9));
