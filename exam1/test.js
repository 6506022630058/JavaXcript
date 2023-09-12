function maxProductExplanation(n) {
    const input = n;
    let arr = [];
    while(n > 0){
        if (n > 3){
            n -= 3;
            arr.push(3);
        }else if (n > 2){
            if (n == 3 && arr[0] !== undefined){
                n -= 3;
                arr.push(3);
            }else{
                n -= 2;
                arr.push(2);
            }
        }else if (n >= 1){
            if (n == 2 && arr[0] !== undefined){
                n -= 2;
                arr.push(2);
            }else{
                n -= 1;
                arr.push(1);
            }
        }
    }
    if (arr[0] == 3 && arr[arr.length-1] == 1){
        arr[0] = 2;
        arr[arr.length-1] = 2;
    }
    if (arr.length > 2 && arr.includes(1) && arr.includes(2)){
        arr.splice(arr.indexOf(1), 1);
        arr[arr.indexOf(2)] = 3;
    }
    arr = arr.sort(function(a, b){return a-b});
    return `Input: n = ${input}
Output: ${arr.reduce((a, b) => a * b, 1)}
Explanation: ${input} = ${arr.join(' + ')}, ${arr.join(' × ')} = ${arr.reduce((a, b) => a * b, 1)}`
}
// Example usage
console.log(maxProductExplanation(2));
console.log(maxProductExplanation(5));
console.log(maxProductExplanation(7));
console.log(maxProductExplanation(10));
console.log(maxProductExplanation(15));