let status = 200;
// status = 400;
// status = 500;
// status = 600;

switch (status){
    case 200:
        console.log("OK!");
        break;
    case 400: //400 or 500
    case 500: //400 or 500
        console.log("Error!");
        break;
    default: //else
        console.log("Unknown status");
}