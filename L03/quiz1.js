let values1 = ["Apple",1,false];
let values2 = ["Fries",9,true,"Mars"];
let values3 = ["Mars",9,"Apple"];

function compareArrays(arr1,arr2){
    result = []
    for (let data1 of arr1) {
        for (let data2 of arr2) {
            if (data1 === data2) {
                result.push(data1);
            }
        }
    } 
    if (result.length === 0) {
        result = "No common elements";
    }else{
        result = result.join(",");
    }
    console.log(result);
}

compareArrays(values1,values2);
compareArrays(values1,values3);
compareArrays(values2,values3);