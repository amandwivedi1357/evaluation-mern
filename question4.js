

  function logic(obj){
    let copy = {}
    for(let i in obj){
        copy[i] = obj[i]
    }
    return copy
  }
  const obj = {
    name: "John",
    address: {
      city: "New York",
      zip: 10001
    }
  };
  
  const copy = logic(obj);
  console.log(copy);