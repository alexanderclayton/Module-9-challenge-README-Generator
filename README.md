# Alex Clayton's README Generator

## Introduction
This project was developed by Alex Clayton as part of the KU Coding Bootcampt 09-NodeJS Challenge.  This is a professional README generator that takes user input to generate a professional README file.

## What's in the project?
The acceptance criteria for this project are as follows:

1.  WHEN I am prompted for information about my application repository
    THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

    This was achieved using the fs library to write a file using the user inputted information.

2.  WHEN I enter my project title
    THEN this is displayed as the title of the README

    This was achieved using the inquirer library to obtain the input, and appending the title to the body of the README with the fs library writeFile function.

3.  WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

    This was also achieved using the inquirer library to obtain the user inputs for each section, then appending the responses to the body of the README with the fs library writeFile function.

4.  WHEN I choose a license for my application from a list of options
    THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

    This was achieved with a function that first took the user input of the license, created a variable with the license badge (used the following URL for reference: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba), and appending it to the body of the README with the fs library writeFile function.

5.  WHEN I enter my GitHub username
    THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

    This was achieved using the inquirer library to obtain the user input, then appending/concatenating the response to a URL in the body of the README with the fs library writeFile function.

6.  WHEN I enter my email address
    THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

    This was achieved using the inquirer library to obtain the user input, then appending the response to the body of the README with the fs library write file fuction.
    
7.  WHEN I click on the links in the Table of Contents
    THEN I am taken to the corresponding section of the README

    Used the syntax "[text for link] (location of linked section)" to achieve this.



## The completed project resembles the following image when deployed:

Full Size Image of the README

![full size image of README](./Develop/images/README%20Screenshot.PNG)


## Usage

To generate a README, run the following command in the Develop folder:

```
node index.js [filename]
```

## Resources

[Walkthrough tutorial recorded using screencastify](https://drive.google.com/file/d/1dNx0RT9M-Qk_wfjQnKdwJE8qLjTiIORH/view)

