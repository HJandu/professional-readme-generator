const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description of your project."
    },
    {
        type: "input",
        name: "image",
        message: "Please provide the path to an image you would like to include in your README."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information."
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contribution guidelines."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test instructions."
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for your project.",
        choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address."
    }

];


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("/README.md", generateMarkdown(answers));
        console.log("README.md has been generated.");
    });

}

// function call to initialize program
init();
