// Exmaple output:
// Input: n = 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1
// Input: n = 5
// Output: 6
// Explanation: 5 = 2 + 3, 2 × 3 = 6
// Input: n = 7
// Output: 12
// Explanation: 7 = 2 + 2 + 3, 2 × 2 × 3 = 12    
// Input: n = 10
// Output: 36
// Explanation: 10 = 2 + 2 + 3 + 3, 2 × 2 × 3 × 3 = 36
// Input: n = 15
// Output: 243
// Explanation: 15 = 3 + 3 + 3 + 3 + 3, 3 × 3 × 3 × 3 × 3 = 243

// 1
// 2 > 1+1
// 3 > 1+2
//2,3 > 5

function maxProductExplanation(num){
    const input = num;
    let arr = [];
    while(num>0){
        if(num>=3){
            if(arr[0] !== undefined){
                num-=3;
                arr.push(3);
            }else{
                num-=2;
                arr.push(2);
            }
        }else if(num>=2){
            if(arr[0] !== undefined){
                num-=2;
                arr.push(2);
            }else{
                num-=1;
                arr.push(1);
            }
        }else if(num>=1){
            num-=1;
            arr.push(1);
        }
    }
    if(arr.includes(1) && arr.includes(2) && arr.length>2){
        arr.splice(arr.indexOf(1), 1);
        arr.splice(arr.indexOf(2), 1);
        arr.push(3);
    }
    arr = arr.sort(function(a, b){return a-b});
    const line1 = 'Input: n = '+input;
    const line2 = '\n'
    const line3 = '\n'
    return line1+line2+line3;
}
   


// Example usage
console.log(maxProductExplanation(3));
console.log(maxProductExplanation(4));
console.log(maxProductExplanation(6));
console.log(maxProductExplanation(10));
console.log(maxProductExplanation(15));

