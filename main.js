"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
//Initialize user balance and pin..
let myBalance = 6000;
let myPin = 245;
//Print welcome msg..
console.log(chalk_1.default.bgYellowBright.underline("\n\n\tWelcome to Mrs Babar - ATM Machine\n"));
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk_1.default.yellow("\nEnter your pin code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk_1.default.green.underline("\nPin is correct , Login successfully!\n"));
    let operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk_1.default.yellow("\nSelect an operation:"),
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let WithdrawAns = await inquirer_1.default.prompt([
            {
                name: "withdraw",
                type: "list",
                message: chalk_1.default.yellow("\nSelect A Withdrawal Method :"),
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (WithdrawAns.withdraw === "Fast Cash") {
            let fastcashAns = await inquirer_1.default.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: chalk_1.default.yellow("\nSelect Amount"),
                    choices: [1000, 2000, 3000, 4000, 5000]
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log(chalk_1.default.red.underline("\nInsufficient Balance"));
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(chalk_1.default.green.underline(`\n${fastcashAns.fastcash} Withdraw Successfully!`));
                console.log(chalk_1.default.blue.underline(`\nYour remaining balance is : ${myBalance}`));
            }
        }
        else if (WithdrawAns.withdraw === "Enter Amount") {
            let amountAns = await inquirer_1.default.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: chalk_1.default.yellow("\nEnter the amount to Withdraw:")
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log(chalk_1.default.red.underline("\nInsufficient Balance"));
            }
            else {
                myBalance -= amountAns.amount;
                console.log(chalk_1.default.green.underline(`\n${amountAns.amount} Withdraw Successfully`));
                console.log(chalk_1.default.blue.underline(`\nYour Remaining Balance is : ${myBalance}`));
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk_1.default.blue.underline(`\nYour Account Balance is : ${myBalance}`));
    }
}
else {
    console.log(chalk_1.default.red.underline("\nPin is Incorrect, Try Again!"));
}
