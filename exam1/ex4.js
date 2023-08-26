function totalVolume(...arr) {
    let i = 0
    let plusans = 0
    while (arr[i] !== undefined) {
        let arr2 = arr[i];
        let multiplyans = 1;
        let j = 0;
        while (j < arr2.length){
            multiplyans = multiplyans * arr2[j]
            j = j + 1
        }
        i = i + 1;
        plusans = plusans + multiplyans;
        multiplyans = 1;
    }
    console.log(plusans);
}

totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])
totalVolume([2, 2, 2], [2, 1, 1])
totalVolume([1, 1, 1])