// Write a program that does the following:
// Welcome the user to the password validator tool
// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user

// Going Further
// There are many other constraints you might want to check for the user’s password. Add more constraints and checks to your program. 
// You can read more about String methods in Javascript here.

// Going Even Further
// Add some ASCII Art to the output of your program!
// In order to use ASCII art in your output for the user, you’ll need to use create a multi-line string. More info here .
// Be sure to push your code to Github for this assignment!

//code below

// alert("Welcome to the Password Validator Tool!");

const readline = require('readline');
const passwordValidator = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

passwordValidator.question(`Welcome to the Password Validator Tool! Please enter your password to validate: \n`, (userInput) => {
    // console.log(userInput);
    if (userInput.length >= 10) {
        passwordValidator.close();
    } else {
        passwordValidator.setPrompt('Incorrect! Password requires minimum 10 characters. Please try again \n');
        passwordValidator.prompt();
        passwordValidator.on('line', (userInput) => {
            if (userInput.length >= 10) {
                passwordValidator.close();
            } else {
                passwordValidator.setPrompt('Your password does not meet the minimum character requirements. Try again \n');
                passwordValidator.prompt();
            }
        })
    }
});

passwordValidator.on('close', () => {
    console.log('Success! Password meets minimum requirements');
});