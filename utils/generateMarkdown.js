// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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
  ${answers.License.join(", ")}
  
  ## Questions
  For any questions, please reach out via GitHub or email:
  GitHub: [${answers.GitHub}](https://github.com/${answers.GitHub})
  Email: ${answers.Email}

`;
}

module.exports = generateMarkdown;
