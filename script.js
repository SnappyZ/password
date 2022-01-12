// Assignment code here

// 1 Password Length Prompt //
function generatePassword() {
  var passwordLength = window.prompt("Please choose the desired length of your password. It must be between 8 and 128 characters.");
    if (passwordLength >= 8 || passwordLength <= 128) { 
    alert("Great choice, " + passwordLength + " is my favorite number!");

  } else { 
    alert("Only values between 8 and 128 are acceptable.");
  }
  return generatePassword();
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
