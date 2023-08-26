function getBudgets(arr){
    let totalbudget = 0;
    for (i in arr){
        let budget = arr[i].budget;
        totalbudget = totalbudget+budget;
    }
    console.log(totalbudget);
}
getBudgets([
    { name: "John", age: 21, budget: 23000},
    { name: "Steve", age: 32, budget: 40000},
    { name: "Martin", age: 16, budget: 2700}
]) // 65700
getBudgets([
    { name: "John", age: 21, budget: 29000},
    { name: "Steve", age: 32, budget: 32000},
    { name: "Martin", age: 16, budget: 1600}
]) // 62600