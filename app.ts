#! usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
 {message : "Enter First Number", type : "number",name : "firstNumber"},
 {message : "Enter Second Number", type : "number", name : "secondNumber"},
 {message : "Select One of the Operators to perform for action", type : "list",
  name : "Operator",choices: ["Addition", "Subtraction", "Multiplication", "Division"],
},
]);

console.log(answer);

//Conditional statement..

if(answer.Operator ==="Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.Operator ==="Subtraction"){
    console.log(answer.firstNumber -  answer.secondNumber);
}
else if(answer.Operator ==="Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.Operator ==="Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else{
    console.log("Invalid Operator Please Try Again");
}