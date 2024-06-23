import inquirer from "inquirer" ;

import chalk from "chalk" ;

//Initialize user balance and pin..
let myBalance = 6000;
let myPin = 245;

//Print welcome msg..
console.log(chalk.bgYellowBright.underline("\n\n\tWelcome to Mrs Babar - ATM Machine\n"))
let pinAnswer = await inquirer.prompt([
    {
        name : "pin" ,
        type : "number" ,
        message : chalk.yellow("\nEnter your pin code:")
    }
])
if (pinAnswer.pin === myPin){
    console.log(chalk.green.underline("\nPin is correct , Login successfully!\n"));

    let operationAns = await inquirer.prompt([
       {
        name : "operation" ,
        type : "list" ,
        message : chalk.yellow("\nSelect an operation:") ,
        choices : ["Withdraw Amount" , "Check Balance"]
       }
    ])
if(operationAns.operation === "Withdraw Amount"){
        let WithdrawAns = await inquirer.prompt([
            {
                name : "withdraw" ,
                type : "list" ,
                message : chalk.yellow("\nSelect A Withdrawal Method :") ,
                choices : ["Fast Cash" , "Enter Amount"]
            }
        ])
        if(WithdrawAns.withdraw === "Fast Cash"){
            let fastcashAns = await inquirer.prompt([
                {
                    name : "fastcash" ,
                    type : "list" ,
                    message : chalk.yellow("\nSelect Amount") ,
                    choices : [1000 , 2000 , 3000 , 4000 , 5000]
                }
            ])
            if(fastcashAns.fastcash > myBalance){
                console.log(chalk.red.underline("\nInsufficient Balance"))
            }
            else{
                myBalance -= fastcashAns.fastcash
                console.log(chalk.green.underline(`\n${fastcashAns.fastcash} Withdraw Successfully!`))
                console.log(chalk.blue.underline(`\nYour remaining balance is : ${myBalance}`))
            }
        }
        else if(WithdrawAns.withdraw === "Enter Amount"){
            let amountAns = await inquirer.prompt([
               {
                name : "amount" ,
                type : "number" ,
                message : chalk.yellow("\nEnter the amount to Withdraw:")
               }
        ])
        if(amountAns.amount > myBalance){
        console.log(chalk.red.underline("\nInsufficient Balance"));
        }   
        else{
             myBalance -= amountAns.amount;
            console.log(chalk.green.underline(`\n${amountAns.amount} Withdraw Successfully`));
            console.log(chalk.blue.underline(`\nYour Remaining Balance is : ${myBalance}`))
        }

    }
        
    }
else if (operationAns.operation === "Check Balance"){
    console.log(chalk.blue.underline(`\nYour Account Balance is : ${myBalance}`))
    }
}
else{
    console.log(chalk.red.underline("\nPin is Incorrect, Try Again!"))
}