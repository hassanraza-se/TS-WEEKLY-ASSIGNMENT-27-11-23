#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("Calculate volume of the cube."));

inquirer.prompt({
    name: "side",
    message: "Enter edge length of the cube:",
    type: "input",
    validate(input: any): boolean | string | Promise<boolean | string> {
        const parsedValue: number = parseFloat(input);
        return !isNaN(parsedValue) && parsedValue > 0;
    },
    default: 1
}).then(({side}) => {
    const volume :number = side ** 3;
    console.log(chalk.green.bold("Volume of the cube is ="), volume);
});