let status= 200;
// status = 400;
// status = 300;

if (status ===200){
    console.log("OK!");
} else if(status === 400){
    console.log("Error!");
} else{
    console.log("Unknown status");
}

const message = (status===200)? "OK!" : "Error";
console.log(message);