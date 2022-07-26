// Packages needed for this are application, Inquirer, fs library package, and the markdown imported from utils
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// Array of questions for user input
const questions = [
"Project Title?",
"Section Titles?",
"Descrpition",
"Table Descriptions?",
"Whats in the Table of Contacts",
"How to Install?", "What to USe it for?",
"What type of License?",
"Who made it?",
"How do you test it?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("It is done...")
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            name: "nameOfApp",
            message: "Title?",
            type: "input"
        },
        {
            name: "sectionTitles",
            message: "Section Titles?",
            type: "input"
        },
        {
            name: "description",
            message: "Description?",
            type: "input"
        },
        {
            name: "tableDescription",
            message: "Description of Table?",
            type: "input"
        },
        {
            name: "tableContent",
            message: "What's in the Table of Contents?",
            type: "input"
        },
        {
            name: "installation",
            message: "How do you Install the Program?",
            type: ""
        },
        {
            name: "usage",
            message: "What to do with it?",
            type: "input"
        },
        {
            name: "license",
            message: "what type of license does this app have?",
            type: "input",
        },
        {
            name: "authors",
            message: "Who is responsible for creating this?",
            type: "input"
        },
        {
            name: "tests",
            message: "How to test it?",
            type: "input"
        }
    ])
};

// Function call to initialize app
init()
    .then(readmeData => {
        return [readmeData.fileName, generateMarkdown(readmeData)]
    })
    .then((readmeText) => {
        writeToFile(readmeText[0], readmeText[1])
    });