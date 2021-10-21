// 11> String-2 -- sameStarChar
// Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.
function sameStarChar(str){
    for(let i = 1;i < str.length - 1; i++){
      if(str.charAt(i) === '*'){
        if(str.charAt(i-1) !== str.charAt(i + 1)){
            return false;
          }
       }
    }
    return true;
  }

  console.log(sameStarChar('Hello*oat'));
