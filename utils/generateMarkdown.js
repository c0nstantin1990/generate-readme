function generateMarkdown(answers) {
  return `
  # ${answers.Title}
  
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
