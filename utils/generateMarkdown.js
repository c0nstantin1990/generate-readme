function generateMarkdown(answers) {
  return `
  # ${answers.Title}
  
  ## Description
  ${answers.Description}
  
  ## Installation
  ${answers.Installation}
  
  ## Usage
  ${answers.Usage}
  
  ## Contributing
  ${answers.Contributing}
  
  ## Tests
  ${answers.Tests}
  
  ## License
  ${answers.License}
  
  ## Questions
  For any questions, please reach out via GitHub or email:
  GitHub: [${answers.GitHub}](https://github.com/${answers.GitHub})
  Email: ${answers.Email}

`;
}

module.exports = generateMarkdown;
