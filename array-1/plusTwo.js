// 20> Array-1 -- plusTwo
// Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

function plusTwo(a, b){
    let c = [];
    c[0] = a[0];
    c[1] = a[1];
    c[2] = b[0];
    c[3] = b[1];
    return c;
}
console.log(plusTwo([3, 4], [5, 6]));