function getVowel(str){
    const m = str.match(/[aeiou]/gi);
    console.log(m)
    if(m === null) {
        return 0;
    }
    return m.length;
}
console.log(getVowel("seeing"));
console.log(getVowel("bcd"));