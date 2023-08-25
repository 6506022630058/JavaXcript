function longestValidParentheses(wongleb){ /////////////////////////////////////
    let count = 0;
    let perd = 0;
    let pid = 1;
    // console.log(wongleb.length);
    while (pid < wongleb.length){
        if (wongleb[perd] == "(" & wongleb[pid] == ")"){
            count++;
        }
        perd++;
        pid++;
    }
    console.log(count*2);
}

longestValidParentheses("(()") //2
longestValidParentheses(")()())") //4
longestValidParentheses("()))))(()())(") //6