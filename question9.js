
const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "image2.png",
    "text1.txt",
    "text2.txt",
    "photo1.jpg",
    "photo2.jpg",
    "program1.exe",
    "program2.exe",
    "data1.csv",
    "data2.csv",
    "report1.pdf",
    "report2.pdf",
    "image3.png",
    "text3.txt",
    "photo3.jpg",
    "document3.pdf"
  ];
  
  

// function logic(files){
//     let obj = {}
//     for(let i=0;i<files.length;i++){
//         let el = files[i].split(".")[1]

//         if(!obj[el]){
//             obj[el] = []
//         }
//         obj[el].push(files[i])
//     }
//     return obj
// }
// console.log(logic(files));


function logic(files){
    let el = files.reduce((acc,el)=>{
        let s = el.split(".")[1]
        if(!acc[s]){
            acc[s] = []
        }
        acc[s].push(el)
        return acc
    },{})
    return el
}
console.log(logic(files));
