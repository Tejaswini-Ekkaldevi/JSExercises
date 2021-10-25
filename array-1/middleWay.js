// 10> Array-1 -- middleWay
// Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.
function middleWay(a, b){
    a = a[1];
    b = b[1];
    let arr = [a, b];
    return arr;
}
console.log(middleWay([1, 2, 3],[4, 5, 6]));
