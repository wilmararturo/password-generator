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

function updatePasswordOptions() {
  console.log(event.target.id);
  if (event.target.id === "lowercaseSwitch") {
    passwordOptions.includeLowerCase = !passwordOptions.includeLowerCase;
  } else if (event.target.id === "uppercaseSwitch") {
    passwordOptions.includeUpperCase = !passwordOptions.includeUpperCase;
  } else if (event.target.id === "numericSwitch") {
    passwordOptions.includeNumbers = !passwordOptions.includeNumbers;
  } else if (event.target.id === "specialCharSwitch") {
    passwordOptions.includeSpecialChars = !passwordOptions.includeSpecialChars;
  }
  console.log(passwordOptions)
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

function updateSpecialCharOption() {
  if (passwordOptions.includeSpecialChars === false) {
    passwordOptions.includeSpecialChars = true;
  }
  else {
    passwordOptions.includeSpecialChars = true;
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
lowecaseSwitch.addEventListener("click", updatePasswordOptions);
uppercaseSwitch.addEventListener("click", updatePasswordOptions);
numericSwitch.addEventListener("click", updatePasswordOptions);
specialCharSwitch.addEventListener("click", updatePasswordOptions);
generateBtn.addEventListener("click", getPasswordOptions);

