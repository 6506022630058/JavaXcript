let plusFive = (number) => {
    return number + 5;
};
let f = plusFive;
console.log(plusFive(3));

console.log(f(9));

console.log("**************************")

const add = (a,b) => a+b;
console.log(add(1,2));
const subtract = (a,b) => {
    const result = a-b;
    return result;
};
console.log(subtract(4,2))