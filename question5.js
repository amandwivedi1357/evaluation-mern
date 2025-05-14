

function logic(obj1,obj2){
 let obj = {};
 for(let i in obj1){
    obj[i] = obj1[i];
 }
 for(let i in obj2){
    obj[i] = obj2[i];
 }
 return obj;
 }   

 const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };
console.log(logic(obj1,obj2));