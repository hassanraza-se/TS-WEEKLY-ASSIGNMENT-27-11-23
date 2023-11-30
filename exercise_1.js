#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("Calculate are of rectangle"));
function calculateArea() {
    inquirer.prompt([
        {
            name: "length",
            message: "Enter length of the rectangle:",
            type: "input",
            validate(input) {
                const parsedValue = parseFloat(input);
                return !isNaN(parsedValue) && parsedValue > 0;
            },
            default: 1
        }, {
            name: "width",
            message: "Enter width of the rectangle:",
            type: "input",
            validate(input) {
                const parsedValue = parseFloat(input);
                return !isNaN(parsedValue) && parsedValue > 0;
            },
            default: 1
        }
    ]).then(({ length, width }) => {
        const area = length * width;
        console.log(chalk.green.bold("Area of rectangle is ="), area);
    });
}
calculateArea();
