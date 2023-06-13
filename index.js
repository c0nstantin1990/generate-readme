const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
