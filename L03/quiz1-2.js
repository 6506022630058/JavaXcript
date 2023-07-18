let values1 = ["Apple",1,false];
let values2 = ["Fries",9,true,"Mars"];
let values3 = ["Mars",9,"Apple"];

function compareArrays(name1,name2,arr1,arr2){
    result = []
    for (let data1 of arr1) {
        for (let data2 of arr2) {
            if (data1 === data2) {
                result.push(data1);
            }
        }
    } 
    if (result.length === 0){
        console.log(name1+" and "+name2+" don't have common elements");
    }else{
        console.log(name1+" and "+name2+ " are same at "+result.join(", "));
    }
}

compareArrays("values1","values2",values1,values2);
compareArrays("values1","values3",values1,values3);
compareArrays("values2","values3",values2,values3);