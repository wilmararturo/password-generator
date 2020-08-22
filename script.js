// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordOptions = {
  passwordLength: 0,
  includeLowerCase: false,
  includeUpperCase: false,
  includeNumbers: false,
  includeSpecialChars: false,
}

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";

function getPasswordOptions() {
  //prompt for length
  while (passwordOptions.passwordLength < 8 || passwordOptions.passwordLength > 128) {
    var enteredLength = parseInt(prompt("Please enter a length for the password between 8 and 128"));
    if (Number.isInteger(enteredLength)) {
      passwordOptions.passwordLength = enteredLength;
    }

  }

  //prompt for options "lowercase, uppercase, numeric, and/or special characters"
}
// Generate password
function generatePassword() {
  return "password";
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  getPasswordOptions();
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
