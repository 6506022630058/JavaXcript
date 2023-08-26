function capToFront(str){
    let i = 0
    let big = "";
    let small = "";
    while (i < str.length){
        if (str[i] == str[i].toUpperCase()) {
            big = big + str[i]
        }else {
            small = small + str[i]
        }
        i = i + 1
    }
    console.log(big+small)
}

capToFront("hApPy")
capToFront("moveMENT")
capToFront("shOrtCAKE")