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

//Function to get user input for various char type to be included in the password 
function showCharTypeConfirm () {
  let charType = {}
  while (true) {
    charType["uppercase"] = confirm('Include upper case characters?');
    charType["lowercase"] = confirm('Include lower case characters?');
    charType["numeric"] = confirm('Include numeric characters?');
    charType["specialcharacter"] = confirm('Include special characters?');
    //Check if one character type is picked other alert and prompt again!
    if (Object.values(charType).indexOf(true) > -1) {
      break
    } else {
      alert("Minimum one character type needs to be selected to generate password. Please try again")
    }
  }
  return  charType;
}

//Function to create password based upon char type selected by user
function createPassword(charType, pwdLength) {

  let passwordCharacters = "", password ="" ;
  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowerChars = "abcdefghijklmnopqrstuvwxyz"
  let numericChars = "0123456789"
  let splChars ="!@#$%^&*()"

  //check if uppercase chars need to be included
  if (charType["uppercase"]) {
    passwordCharacters = upperChars;
  }
  //check if lowercase chars need to be included
  if (charType["lowercase"]) {
    passwordCharacters = passwordCharacters.concat(lowerChars);
  }
  //check if numeric chars need to be included
  if (charType["numeric"]) {
    passwordCharacters = passwordCharacters.concat(numericChars);
  }
  //check if special chars need to be included
  if (charType["specialcharacter"]) {
    passwordCharacters = passwordCharacters.concat(splChars);
  }
  //Random generator
  for (var i = 0; i < pwdLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters.substring(randomNumber, randomNumber +1);
   }

   return password

}

//Main password generation function shows various prompts and validates user input
function generatePassword() {
  //function to check if inputVal is a number and it is between 8 and 128
  let pwdlength = showLengthPrompt ("Enter length of the password" , "Choose a length of at least 8 characters and no more than 128 characters")

  if (pwdlength) { 
      //Prompt for char type
      let charType = showCharTypeConfirm ()
      return createPassword(charType,pwdlength)
  } 

  return "Password Generation Cancelled!"

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
