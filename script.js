// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowecaseSwitch = document.querySelector("#lowercaseSwitch");
var uppercaseSwitch = document.querySelector("#uppercaseSwitch");
var numericSwitch = document.querySelector("#numericSwitch");
var specialCharSwitch = document.querySelector("#specialCharSwitch");

var passwordOptions = {
  passwordLength: document.querySelector("#passwordLength").value,
  includeLowerCase: false,
  includeUpperCase: false,
  includeNumbers: false,
  includeSpecialChars: false,
}


var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";

function updateLowercaseOption() {
  if (passwordOptions.includeLowerCase === false) {
    passwordOptions.includeLowerCase = true;
  }
  else {
    passwordOptions.includeLowerCase = true;
  }
}

function updateUppercaseOption() {
  if (passwordOptions.includeUpperCase === false) {
    passwordOptions.includeUpperCase = true;
  }
  else {
    passwordOptions.includeUpperCase = true;
  }
}

function updateNumericOption() {
  if (passwordOptions.includeNumbers === false) {
    passwordOptions.includeNumbers = true;
  }
  else {
    passwordOptions.includeNumbers = true;
  }
}

function updateLowercaseOption() {
  if (passwordOptions.includeLowerCase === false) {
    passwordOptions.includeLowerCase = true;
  }
  else {
    passwordOptions.includeLowerCase = true;
  }
}

function getPasswordOptions() {
  event.preventDefault();
  console.log(passwordOptions);
  //validate form entries



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
lowecaseSwitch.addEventListener("click", updateLowercaseOption);
uppercaseSwitch.addEventListener("click", updateUppercaseOption);
numericSwitch.addEventListener("click", updateNumericOption);
specialCharSwitch.addEventListener("click", updateSpecialCharOption);
generateBtn.addEventListener("click", getPasswordOptions);

