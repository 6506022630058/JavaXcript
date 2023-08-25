function simplePair(arr, ans){ ////////////////////////////////////////////////
    let used_i = [];
    let output = "";
    for (i in arr){
        for (j in arr){
            if ((arr[i]*arr[j]) == ans & (i !== j)){
                if(used_i.includes(j) == false){
                    output = output + `[${arr[i]},${arr[j]}]`;
                    used_i.push(i);
                }
                
            }
        }
    }
    if (output !== ""){
        console.log(output);
    }else {
        console.log(null);
    }
}

simplePair([1, 2, 3], 3) // [1,3]
simplePair([1, 2, 3], 6) // [2,3]
simplePair([1, 2, 3], 9) // null