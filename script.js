// Assignment code here
function generatePassword() {
  var confirmLength = window.prompt("Please choose the desired length of your password. It must be between 8 and 128 characters.");
  if (confirmLength === true) {
    confirmLength = alert("Add a value.");
  } else if (confirmLength > 8 || confirmLength < 128) { 
  alert ("This is not a valid answer, please choose a value between 8 and 128.");
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
