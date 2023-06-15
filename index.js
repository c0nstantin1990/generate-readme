const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project title:",
    name: "Title",
    default: "n/a",
  },
  {
    type: "input",
    message: "Description:",
    name: "Description",
    default: "n/a",
  },
  {
    type: "input",
    message: "Installation instructions:",
    name: "Installation",
    default: "n/a",
  },
  {
    type: "input",
    message: "Usage information:",
    name: "Usage",
    default: "n/a",
  },
  {
    type: "input",
    message: "Contribution guidelines:",
    name: "Contributing",
    default: "n/a",
  },
  {
    type: "input",
    message: "Test instructions:",
    name: "Tests",
    default: "n/a",
  },
  {
    type: "checkbox",
    message: "What license do you want to use?",
    choices: ["MIT", "Apache", "None"],
    name: "License",
  },
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "GitHub",
    default: "n/a",
  },
  {
    type: "input",
    message: "Enter your email:",
    name: "Email",
    default: "n/a",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  const outputDir = path.join(".", "output");
  const outputPath = path.join(outputDir, fileName);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  fs.writeFile(outputPath, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("README file created successfully in the 'output' folder!");
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then(({ name, ...answers }) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
  });
}

init();
