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
const generateMarkdown = data => {
  let md = `
# ${data.title}

${data.description ? `## Description 
${data.description}`: ``}

## Table of Contents
${data.installation ? `* [Installation](#installation)` : ``}
${data.usage ? `* [Usage](#usage)` : ``}
${data.credits ? `* [Credits](#credits)` : ``}
${data.license ? `* [License](#license)` : ``}
${data.badges ? `* [Badges](#badges)` : ``}
${data.features ? `* [Features](#features)` : ``}
${data.contributing ? `* [Contributing](#contributing)` : ``}
${data.tests ? `* [Tests](#tests)` : ``}

${data.installation ? `## Installation 
${data.installation}`: ``}

${data.usage ? `## Usage 
${data.usage}`: ``} 

${data.contribution ? `## Credits 
${data.contribution}`: ``} 

${data.title ? `## License 
${data.title}`: ``} 

${data.title ? `## Badges 
${data.title}`: ``} 

${data.title ? `## Features 
${data.title}`: ``} 

${data.contribution ? `## Contributing 
${data.contribution}`: ``} 

${data.testing ? `## Tests 
${data.testing}`: ``} 
`
  return md;
}

module.exports = generateMarkdown;
