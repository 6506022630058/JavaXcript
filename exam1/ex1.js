function numberSplit(num) {
    let v1 = Math.floor(num/2);
    let v2 = Math.ceil(num/2);
    console.log(`[${v1}, ${v2}]`);
}

numberSplit(4)
numberSplit(10)
numberSplit(11)
numberSplit(-9)