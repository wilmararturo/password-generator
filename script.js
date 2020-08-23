// Assignment Code
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var passwordFormLength = document.querySelector("#passwordLength");
var lowecaseSwitch = document.querySelector("#lowercaseSwitch");
var uppercaseSwitch = document.querySelector("#uppercaseSwitch");
var numericSwitch = document.querySelector("#numericSwitch");
var specialCharSwitch = document.querySelector("#specialCharSwitch");

// An object for the password options
var passwordOptions = {
  passwordLength: 8,
  includeLowerCase: false,
  includeUpperCase: false,
  includeNumbers: false,
  includeSpecialChars: false,
}

// strings for the different character classes
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";

// update the password options object based on selections
function updatePasswordOptions() {

  if (event.target.id === "lowercaseSwitch") {
    passwordOptions.includeLowerCase = !passwordOptions.includeLowerCase;
  } else if (event.target.id === "uppercaseSwitch") {
    passwordOptions.includeUpperCase = !passwordOptions.includeUpperCase;
  } else if (event.target.id === "numericSwitch") {
    passwordOptions.includeNumbers = !passwordOptions.includeNumbers;
  } else if (event.target.id === "specialCharSwitch") {
    passwordOptions.includeSpecialChars = !passwordOptions.includeSpecialChars;
  }
  passwordOptions.passwordLength = parseInt(passwordFormLength.value);


}


// Check the password options to meet compliance 
// return true if in compliance
function validatePasswordOptions() {
  //length must be between 8 and 128 else raise an alert
  if (passwordOptions.passwordLength < 8 || passwordOptions.passwordLength > 128) {
    alert("The Password Lenth must be between 8 and 128");
    return false;
  }

  // one of these must be true else raise an alert
  if (passwordOptions.includeLowerCase === false && passwordOptions.includeUpperCase === false && passwordOptions.includeNumbers === false && passwordOptions.includeSpecialChars === false) {
    alert("Please choose at lease one of lowercase, uppercase, numeric, and/or special characters");
    return false;
  }
  return true;

}

// Generate password from the selected options
function generatePassword() {
  //empty vars for the selected chars and new password
  var allChars = "";
  var newPassword = "";

  if (passwordOptions.includeLowerCase) {
    allChars += lowercaseChars;
  }
  if (passwordOptions.includeUpperCase) {
    allChars += uppercaseChars;
  }
  if (passwordOptions.includeNumbers) {
    allChars += numbers;
  }
  if (passwordOptions.includeSpecialChars) {
    allChars += specialChars;
  }



  // make the character list an array to pull elements at random
  var allCharsArray = allChars.split("");
  // loop through the char array until the required number of chars are picked
  for (i = 0; i < passwordOptions.passwordLength; i++) {
    // random number stuff
    var allCharsIndex = Math.floor(Math.random() * allChars.length);
    newPassword += allCharsArray[allCharsIndex];

  }

  return newPassword;
}
// Write password to the #password input
function writePassword() {
  updatePasswordOptions();
  //only generate a password if the options are valid
  if (validatePasswordOptions()) {

    var password = generatePassword();
    passwordText.textContent = password;

  }

}


// Add event listener to generate button
lowecaseSwitch.addEventListener("click", updatePasswordOptions);
uppercaseSwitch.addEventListener("click", updatePasswordOptions);
numericSwitch.addEventListener("click", updatePasswordOptions);
specialCharSwitch.addEventListener("click", updatePasswordOptions);
generateBtn.addEventListener("click", writePassword);

