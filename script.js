// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt password length function to prompt user with Message and validates user input until the condition is meet
// Takes 2 parameters 
// 1. Prompt Message
// 2. Alert Message
// Returns user entered value 

function showLengthPrompt(promptMessage, alertMessage) {
  let inputVal = ""

  while (true) {
    inputVal = prompt(promptMessage)
    
    // If user cancels the prompt then stop the validation
    if (inputVal === null) {
      return
    }

    // Evaluate the condition 
    // Show Alert if condition is false 
    // Otherwise break the loop and return inputValue
    if (isNaN(parseInt(inputVal).val) && parseInt(inputVal) >= 8 && parseInt(inputVal) <= 128) {
      break
    } else {
      alert(alertMessage)
    }  
  }
  
  return inputVal
}

//Function to valid user input for various char type to be included in the password 
function showCharTypeConfirm () {
  let charType = {}
  charType["lowercase"] = confirm('Include lower case characters?');
  charType["uppercase"] = confirm('Include upper case characters?');
  charType["numeric"] = confirm('Include numeric characters?');
  charType["specialcharacter"] = confirm('Include special characters?');
  return  charType;
}

//Main password generation function shows various prompts and validates user input

function generatePassword() {
  
  let charType = showCharTypeConfirm ()
  //function to check if inputVal is a number and it is between 8 and 128
  let passwordlength = showLengthPrompt ("Enter length of the password" , "Choose a length of at least 8 characters and no more than 128 characters")

  if (passwordlength) { 
      return "Testpassword"
  } 

  return "Password Generation Cancelled!"

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
