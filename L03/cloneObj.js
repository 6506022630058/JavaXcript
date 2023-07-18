const obj1 = {
    person:"Anirach",
    weight:85,     
}

// open with live server to watch the result
const obj2 = obj1;                     //obj1 and obj2 are the same object
// const obj2 = Object.assign({},obj1);   //different object
// const obj2 = {...obj1};                //different object
obj2.weight = 75;
console.log(obj1);
console.log(obj2);