function highestDigit(num) { 
    let most = 0
    let i = 0;
    num = num.toString();
    while (i < num.length){
        if (parseInt(num[i]) > most) {
            most = parseInt(num[i]);
        }
        i = i + 1
    }
    console.log(most)
}

highestDigit(379)
highestDigit(2)
highestDigit(377401)