// Assignment Code\
// Create Arrays to choose characters from
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","&","*","?","-",""];
var generateBtn = document.querySelector("#generate");
// Choose number of chacters 8-128
var passLength = window.prompt("How many characters would you like the password to be between 8-128?")
var upperCaseLetterConfirm = window.confirm("Would you like Uppercase letters?")
var LowerCaseLetterConfirm = window.confirm("Would you like Lowercase letters?")
var numberConfirm = window.confirm("Would you like Numbers?")
var symbolConfirm = window.confirm("Would you like symbols?")
// Create a confirm to start making password 

// Create prompt to collect user inputs


//Create a function that will collect and add all the parts together
var chooseCharacter = function(){
for (let i = 0; i < passLength; i++) {
  if 
  
}

}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
