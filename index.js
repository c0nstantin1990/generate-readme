const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project title:",
    name: "Title",
  },
  {
    type: "input",
    message: "Description:",
    name: "Description",
  },
  {
    type: "input",
    message: "Installation instructions:",
    name: "Installation",
  },
  {
    type: "input",
    message: "Usage information:",
    name: "Usage",
  },
  {
    type: "input",
    message: "Contribution guidelines:",
    name: "Contributing",
  },
  {
    type: "input",
    message: "Test instructions:",
    name: "Tests",
  },
  {
    type: "checkbox",
    message: "What license do you want to use?",
    choices: ["MIT License", "ISC", "None"],
    name: "License",
  },
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "GitHub",
  },
  {
    type: "input",
    message: "Enter your email:",
    name: "Email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
