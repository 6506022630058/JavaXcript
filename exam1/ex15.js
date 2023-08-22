function jumpingFrog(numofstone,arr){
    let jump = 0;
    let now = 0
    let i = 0;
    while (now < numofstone+2){
        if (arr[i] !== 0){
            jump = jump + 1;
            now = now + arr[i];
        }
        i = i + 1;
    }
    console.log(jump)
}

//                                    jump1  jump2  jump3  jump4  jump5  jump6 
jumpingFrog(5,[1,1,1,1,1]) // 6 (start -> st1 -> st2 -> st3 -> st4 -> st5 -> fin)
//                                    jump1  jump1    jump3              jump4
jumpingFrog(5,[1,3,1,1,1]) // 4 (start -> st1 -> st2   -> (st3,st4,st5)   -> fin)
jumpingFrog(5,[1,1,0,1,1]) // "no chance :-("