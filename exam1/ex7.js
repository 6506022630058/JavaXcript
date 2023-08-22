function sumTwoSmallestNums(arr){
    let smallest = Infinity
    for (i in arr){
        if (arr[i] < smallest){
            smallest = arr[i];
        }
    }
    let small1 = smallest;
    for (j in arr){
        if (arr[i] < smallest & arr[i] !== small1){
            smallest = arr[i];
        }
    }
    console.log(small1 + smallest)
}

sumTwoSmallestNums([19, 5, 42, 2, 77]) //7
sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) //3453455
sumTwoSmallestNums([2, 9, 6, -1]) //8
sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) //--
sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) //4519