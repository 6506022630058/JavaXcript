const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var name,weight,height, bmi;

rl.question('What is your name? ', (answer) => {
    name = answer;
    rl.question('What is your weight? ', (answer) => {
        weight = parseFloat(answer);
        rl.question('What is your height? ', (answer) => {
            height = parseFloat(answer);
            bmi = weight / (height * height);
            console.log(name + ", your BMI is " + bmi);
            rl.close();
        });
    }
    );
});

