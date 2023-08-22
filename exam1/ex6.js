function removeDups(arr){
    let checklist = [];
    for (i in arr){
        if (!(arr[i] in checklist)){
            checklist.push(arr[i]);
        }
    }
    console.log(checklist);
}

removeDups([1, 0, 1, 0]) // [1, 0]
removeDups(["The", "big", "cat"]) // ["The", "big", "cat"]
removeDups(["John", "Taylor", "John"]) // ["John", "Taylor"]