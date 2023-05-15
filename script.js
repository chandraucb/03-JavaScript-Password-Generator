// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Reusable function to prompt user with Message and validates user input until the condition is meet
// Takes 3 parameters 
// 1. Prompt Message
// 2. Alert Message
// 3. Validation Condition for input value as a string
// Returns user entered value 

function showPrompt(promptMessage, alertMessage, condition) {
  let inputVal = ""

  while (true) {
    inputVal = prompt(promptMessage)
    
    // If user cancels the prompt then stop the validation
    if (inputVal === null) {
      return
    }

    // Evaluate the condition and show Alert if it is false otherwise break the loop and return inputValue
    if (!eval(condition)) {
      alert(alertMessage)
    } else {
      break
    } 
  }
  
  return inputVal
}

//Main password generation function which calls various prompts and validates user values

function generatePassword() {
  //Condition check to if inputVal is a number and it is between 8 and 128
  let condition = "isNaN(parseInt(inputVal).val) && parseInt(inputVal) >= 8 && parseInt(inputVal) <= 128"
  var passwordlength = showPrompt ("Enter length of the password" , "Choose a length of at least 8 characters and no more than 128 characters", condition)
  
  return "Testpassword";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
