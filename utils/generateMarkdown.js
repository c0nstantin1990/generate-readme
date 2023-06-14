function generateMarkdown(answers) {
  let licenseBadge = "";

  // Checking if a license is specified
  if (answers.License) {
    // Mapping the license name to the corresponding badge URL
    const licenseBadges = {
      MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      Apache:
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      None: "![License](https://img.shields.io/badge/License-None-lightgrey.svg)",
    };
    // Checking if a badge URL is available for the license
    if (licenseBadges[answers.License]) {
      licenseBadge = licenseBadges[answers.License] + " ";
    }
  }

  return `
# ${answers.Title} ${licenseBadge}

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
