#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("Check if the number is positive, negative or, zero."));

inquirer.prompt({
    name: "number",
    message: "Enter the number to check:",
    type: "input",
    validate(input: any): boolean | string | Promise<boolean | string> {
        const parsedValue: number = parseFloat(input);
        return !isNaN(parsedValue);
    },
    default: 1
}).then(({number}) => {
    if (number > 0) {
        console.log(chalk.green.bold(`(${number}) is positive.`));
    } else if (number < 0) {
        console.log(chalk.red.bold(`(${number}) is negative.`));
    } else {
        console.log(chalk.cyan.bold(`(${number}) is zero.`));
    }
});