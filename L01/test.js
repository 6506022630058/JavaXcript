//Program to remove leading and trailing zeros from an input string
//example: "230.500" -> "230.5"
//example: "00402" -> "402"
//example: "03.1600" -> "3.16"
//example: "00.00" -> "0"

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

// function deleteZero(str) {
//     str1 = str
//     num = parseFloat(str);
//     num = num.toString();
//     console.log('The input string is' ,str1,' output is', num);
// }

rl.question('Enter number: ', (answer) => {
    num = parseFloat(answer)
    str = num.toString()
    console.log('The input string is' ,answer,'output is', str);
});