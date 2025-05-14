

function logic(str){
    let words = str.split(" ");
    for(let i = 0;i<words.length;i++){
        let temp = "";
        for(let j = words[i].length-1;j>=0;j--){
           temp += words[i][j];
        }
        words[i] = temp;
    }
    return words.join(" ");
}

console.log(reverseWords("Hello World"));