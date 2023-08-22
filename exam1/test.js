function longestValidParentheses(wongleb){
    let count = 0;
    for (i in wongleb){
        // if ((wongleb[i] == '(') & (wongleb[i+1] == ')')){
        //     count = count + 1;
        // }
        console.log(i)
        console.log(wongleb[i+1])
    }
    console.log(count);
}

longestValidParentheses("(()") //2
longestValidParentheses(")()())") //4
longestValidParentheses("()))))(()())(") //6