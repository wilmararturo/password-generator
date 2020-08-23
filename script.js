// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordFormLength = document.querySelector("#passwordLength");
var lowecaseSwitch = document.querySelector("#lowercaseSwitch");
var uppercaseSwitch = document.querySelector("#uppercaseSwitch");
var numericSwitch = document.querySelector("#numericSwitch");
var specialCharSwitch = document.querySelector("#specialCharSwitch");

var passwordOptions = {
  passwordLength: 8,
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
  passwordOptions.passwordLength = parseInt(passwordFormLength.value);
  console.log(passwordOptions);

}



function validatePasswordOptions() {
  if (passwordOptions.passwordLength < 8 || passwordOptions.passwordLength > 128) {
    alert("The Password Lenth must be between 8 and 128");
  }

  if (passwordOptions.includeLowerCase === false && passwordOptions.includeUpperCase === false && passwordOptions.includeNumbers === false && passwordOptions.includeSpecialChars === false) {
    alert("Please choose at lease one of lowercase, uppercase, numeric, and/or special characters");
  }
}
// Generate password
function generatePassword() {
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
  console.log(allChars);

  allCharsArray = allChars.split("");
  for (i = 0; i < passwordOptions.passwordLength; i++) {
    var allCharsIndex = Math.floor(Math.random() * allChars.length);
    newPassword += allCharsArray[allCharsIndex];
    console.log(newPassword);
  }

  return newPassword;
}
// Write password to the #password input
function writePassword() {
  validatePasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;

}


// Add event listener to generate button
lowecaseSwitch.addEventListener("click", updatePasswordOptions);
uppercaseSwitch.addEventListener("click", updatePasswordOptions);
numericSwitch.addEventListener("click", updatePasswordOptions);
specialCharSwitch.addEventListener("click", updatePasswordOptions);
generateBtn.addEventListener("click", writePassword);

