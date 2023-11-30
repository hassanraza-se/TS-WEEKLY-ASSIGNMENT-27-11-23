#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("Check if a given number is even or odd."));
inquirer.prompt({
    name: "number",
    message: "Enter the number to check even|odd:",
    type: "input",
    validate(input) {
        const parsedValue = parseFloat(input);
        return !isNaN(parsedValue);
    },
    default: 1
}).then(({ number }) => {
    if (number % 2 == 0) {
        console.log(chalk.green.bold(`(${number}) is even.`));
    }
    else {
        console.log(chalk.red.bold(`(${number}) is odd.`));
    }
});
