const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");
// const api = require("./utils/api");

const questions = [
    {
        type: "input",
        name: "user",
        message: "Please enter your GitHub username.",
        validate: function(user) {
            if (user == "") {
                return "Please enter a valid username."
            } else {
                return true
            }
        } 
    },{
        type: "input",
        name: "title",
        message: "Please enter a title for your project.",
        validate: function(title) {
            if (title == "") {
                return "Please enter a valid title."
            } else {
                return true
            }
        } 
    },{
        type: "editor",
        name: "description",
        message: "Please include a description of your project. Enter and save your response in the pop-up text editor. (min 100 characters)",
        validate: function(description) {
            let descriptionChars = description.split("");

            if (descriptionChars.length < 100 || description == "") {
                return "This section must have at least 100 characters."
            } else {
                return true;
            };
        } 
    },{
        type: "editor",
        name: "installation",
        message: "Please include an installation guide with at least two steps. Steps should start with a number and occupy a single line each. \n -----example----- \n 1. This is step one. \n 2. This is step two. \n ----------------- \n Enter and save your response in the pop-up text editor."
,
        validate: function (installation) {
            if (installation.split('\n').length < 2 || installation == "") {
                return "Please enter at least 2 steps."
            } else {
                return true;
            }
        } 
    },{
        type: "editor",
        name: "usage",
        message: "Please include information on how to use your project. Enter and save your response in the pop-up text editor. (min. 100 characters)",
        validate: function(usage) {
            let usageChars = usage.split("");

            if (usageChars.length < 100 || usage == "") {
                return "This section must have at least 100 characters."
            } else {
                return true;
            };
        } 
    },{
        type: "editor",
        name: "contributing",
        message: "Please include information on how others can contribute to your project. Default is N/A.",
        default: "N/A",
    },{
        type: "input",
        name: "tests",
        message: "Please enter tests. Default is N/A.",
        default: "N/A",
    },{
        type: "input",
        name: "license",
        message: "Please enter a license. Default is ISC.",
        default: "ISC",
    },{
        type: "editor",
        name: "credits",
        message: "Please include any credits you would like to mention, including any other authors, references, etc. Default is N/A",
        default: "N/A", 
    }
];

function init() {
    inquirer.prompt(questions).then(answer => {
        console.log(answer);
        fs.writeFile("./markdown/README.md", generate(answer), function (err) {
            if (err) {
                throw err
            } else {
                console.log("Markdown generated successfully! Please check the markdown folder.")
            }}
        );
    });
};

init();