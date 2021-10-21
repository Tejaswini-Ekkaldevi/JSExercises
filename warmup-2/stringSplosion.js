// 4> Warmup-2 -- stringSplosion
// Given a non-empty string like "Code" return a string like "CCoCodCode".

function stringSplosion(str){
  let len = str.length;
  let s = "";
  for (let i = 0; i < len + 1; i++)
    s += str.substring(0,i);
  return s;
}

console.log(stringSplosion('Code'));