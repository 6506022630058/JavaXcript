function deleteZero(str) {
    num = parseFloat(str);
    return num.toString();
}

console.log(deleteZero("230.500"));
console.log(deleteZero("00402"));
console.log(deleteZero("03.1600"));
console.log(deleteZero("00.00"));