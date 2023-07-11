function test(t){
    if (t === undefined){
        return"Undefined value!";
    }
    return t;
}
let x;
let y = 5;
console.log(test(x));
console.log(test(y));