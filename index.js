const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
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
    choices: [
      { name: "MIT", value: "MIT" },
      { name: "Apache", value: "Apache" },
      { name: "None", value: "None" },
    ],
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

// Function to write README file
function writeToFile(fileName, data) {
  const outputDir = "./output/";
  const outputPath = outputDir + fileName;
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
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
  });
}

init();
