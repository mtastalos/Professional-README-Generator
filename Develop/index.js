// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
            return true;
            } else {
                console.log('Please enter in a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
            return true;
            } else {
                console.log('Please enter in a project description!');
                return false;
          }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInput',
        message: 'Would you like to include a installation section?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please share the installation instructions.',
        when: ({ confirmInput }) => confirmInput
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to include a usage section?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please share the usage information.',
        when: ({ confirmUsage }) => confirmUsage
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to include a contribution section?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please share any contribution guidelines.',
        when: ({ confirmContribution }) => confirmContribution
    },
    {
        type: 'confirm',
        name: 'confirmTesting',
        message: 'Would you like to include a testing section?',
        default: true
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please share any testing instructions.',
        when: ({ confirmTesting }) => confirmTesting
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName , data, function(err) {
        if (err) {
          return console.log(err);
        }
  
        console.log('Success!');
      })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {return generatePage(answers);})
    .then(data => {
        const fileName = 'test.md';
        return writeToFile(fileName, data);
    })
}

// Function call to initialize app
init();
