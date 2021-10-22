// 1> Logic-2 -- makeBricks
// We want to make a row of bricks that is goal inches long. 
// We have a number of small bricks (1 inch each) and big bricks (5 inches each). 
//Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks
function makeBricks(small, big, goal){
    let rem = goal % 10;
    if (goal > small + (big * 5))
     return false;
    if (rem < 5 && small < digit)
      return false;
    else if (rem > 5 && rem > small + 5)
      return false;
    else
      return true;
}
console.log(makeBricks(3, 1, 8));