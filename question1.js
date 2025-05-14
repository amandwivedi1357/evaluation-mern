

function logic(str){
    str=str.toLowerCase()
    let obj={}
    let vowels=0
    let consonants=0
    let spaces = 0
    for(let i=0;i<str.length;i++){
        if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
            vowels++
        }
        else if(str[i]===' '){
            spaces++
        }
        else {
            consonants++
        }
    }
    consonants = consonants - spaces
    obj.vowels=vowels
    obj.consonants=consonants
    return obj
} 

console.log(countVowandCons("Hello World"));
