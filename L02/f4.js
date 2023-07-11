function reverseString(value){
    let reversedValue = "";
    value.split("").forEach((char) => {
        // console.log(char)
        reversedValue = char+ reversedValue;
        console.log(reversedValue)
    });
    return reversedValue;
}
console.log(reverseString("Reverse Me"));