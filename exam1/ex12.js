function frequencySort(str){
    dic = {'A':0,'B':0,'C':0,'D':0,'E':0,'F':0,'G':0,'H':0,'I':0,'J':0,'K':0,'L':0,'M':0,
           'N':0,'O':0,'P':0,'Q':0,'R':0,'S':0,'T':0,'U':0,'V':0,'W':0,'X':0,'Y':0,'Z':0,
           'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'i':0,'j':0,'k':0,'l':0,'m':0,
           'n':0,'o':0,'p':0,'q':0,'r':0,'s':0,'t':0,'u':0,'v':0,'w':0,'x':0,'y':0,'z':0}
    for (i in str){
        dic[str[i]] ++;
    }
    let output = "";
    for (let key in dic){
        if (dic[key] !== 0){
            while (dic[key] !== 0){
                output = output + key;
                dic[key] = dic[key] - 1;
            }
        }
    }
    console.log(output);
}

frequencySort("tree") //eert
frequencySort("cccaaa") // aaaccc
frequencySort("Aabb") // bbAa

//ถี่มากไปหน้า
//ถี่เท่ากันตัวใหย่ไปหน้า
//ถี่เท่าไหย่เท่าเรียง a-z