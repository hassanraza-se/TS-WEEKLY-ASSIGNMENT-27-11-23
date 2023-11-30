#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("Calculate volume of the cube."));
inquirer.prompt({
    name: "side",
    message: "Enter edge length of the cube:",
    type: "input",
    validate(input) {
        const parsedValue = parseFloat(input);
        return !isNaN(parsedValue) && parsedValue > 0;
    },
    default: 1
}).then(({ side }) => {
    const volume = side ** 3;
    console.log(chalk.green.bold("Volume of the cube is ="), volume);
});
