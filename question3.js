

function logic(str){
    str = str.toLowerCase()
    let l = 0;
    let r = str.length - 1;
    while(l < r){
        if(!isAlphaNumeric(str[l])){
            l++;
            continue;
        }
        if(!isAlphaNumeric(str[r])){
            r--;
            continue;
        }
        if(str[l] !== str[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
}


function isAlphaNumeric(c) {
    let code = c.charCodeAt(0);
   
    if (code >= 48 && code <= 57) return true;
    if (code >= 97 && code <= 122) return true;
    return false;
}

console.log(logic("Hello World!"));
console.log(logic("racecar"));