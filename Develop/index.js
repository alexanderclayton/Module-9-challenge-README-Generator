// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username? ",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address? ",
        name: "email",
    },
    {
        type: "input",
        message: "What is your project name? ",
        name: "name"
    },
    {
        type: "input",
        message: "Please write a short description of your project: ",
        name: "description",
    },
    {
        type: "list",
        message: "What kind of license should your project have? ",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        default: "MIT",
        name: "license",
    },
    {
        type: "input",
        message: "What command should be run to install dependencies? ",
        default: "nmp i",
        name: "dependencies",
    },
    {
        type: "input",
        message: "What command should be run to run tests? ",
        default: "npm test",
        name: "test",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo? ",
        name: "ntk",
    },
    {
        type: "input",
        message: "What does the user need to know about contributions to the repo? ",
        name: "contribution",
    },
];


// TODO: Create a function to write README file
// function writeToFile(fileName, data)  --Not sure what to do with fileName
function writeToFile(fileName, data) {

    const readMeText = `# ${data.name}

${licenseBadge(data)}

## Description
    
${data.description}
    
# Table of Contents
    
* [Installation](#installation)
    
* [Usage](#usage)
    
* [License](#license)
    
* [Contributing](#contributing)
    
* [Tests](#tests)
    
* [Questions](#questions)
    
## Installation
    
To install necessary dependencies, run the following command:
    
${data.dependencies}
    
# Usage
    
${data.ntk}
    
# License
    
This project is licensed under the ${data.license} License.
    
# Contributing
    
${data.contribution}
    
# Tests
    
To run tests, run the following command:
    
${data.test}
    
# Questions
    
If you have any questions about the repo, open an issue or contact me directly at ${data.email}.  You can find more of my work at [${data.github}] (https://github.com/${data.github}/).`

    fs.writeFile(fileName, readMeText, (err) =>
        err ? console.error(err) : console.log("Success!")
    );
}

function licenseBadge(data) {
    let licenseBadgeImage = " ";
    if (data.license === "MIT") {
        licenseBadgeImage = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (data.license === "APACHE 2.0") {
        licenseBadgeImage = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (data.license === "GPL 3.0") {
        licenseBadgeImage = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (data.license === "BSD 3") {
        licenseBadgeImage = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    } else {
        licenseBadgeImage = " "
    }
    return licenseBadgeImage
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) =>
        //writes a filename based on the user input after the "node index.js" command
        writeToFile(process.argv[2], data),
        )

}

// Function call to initialize app
init();
