function generateMarkdown(answers) {
  let licenseBadge = "";

  // Checking if a license is specified
  if (answers.License) {
    // Creating the license badge markdown based on the license name
    licenseBadge = `![License](https://img.shields.io/badge/License-${encodeURIComponent(
      answers.License
    )}-blue.svg) `;
  }

  return `
  ${licenseBadge}# ${answers.Title}
  
  ## Description
  ${answers.Description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${answers.Installation}
  
  ## Usage
  ${answers.Usage}

  ## License
  ${answers.License}
  
  ## Contributing
  ${answers.Contributing}
  
  ## Tests
  ${answers.Tests}
  
  
  ## Questions
  For any questions, please reach out via GitHub or email:
  GitHub: [${answers.GitHub}](https://github.com/${answers.GitHub})
  Email: ${answers.Email}

`;
}

module.exports = generateMarkdown;
