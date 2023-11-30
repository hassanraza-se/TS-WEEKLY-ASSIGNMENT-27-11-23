#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("Check if a person is eligible to vote based on their age."));

inquirer.prompt({
    name: "age",
    message: "Enter your age to check eligibility:",
    type: "input",
    validate(input: any): boolean | string | Promise<boolean | string> {
        const parsedValue: number = parseFloat(input);
        return !isNaN(parsedValue);
    },
    default: 1
}).then(({age}) => {
    if (age >= 18) {
        console.log(chalk.green.bold(`You are eligible to cast your vote.`));
    } else {
        console.log(chalk.red.bold(`You are not eligible to cast vote.`));
    }
});