




const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];



function logic(arr){
    let removed = arr.splice(arr.length-4,4)
    fruits.splice(0,0,...removed)
    return fruits
}
console.log(logic(fruits));

