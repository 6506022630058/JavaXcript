const arrayOfNumbers = [1,2,3,4];
const sum = arrayOfNumbers.reduce((accumulator,currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue;
});
console.log(sum);