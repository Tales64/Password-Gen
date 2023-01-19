// Assignment Code\
// Create Arrays to choose characters from
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","&","*","?","-",""];
var catagories = ["passLength","upperCaseLetterConfirm","LowerCaseLetterConfirm","numberConfirm","symbolConfirm"]
var generateBtn = document.querySelector("#generate");
// Choose number of chacters 8-128
var passLength = window.prompt("How many characters would you like the password to be between 8-128?");
var upperCaseLetterConfirm = window.confirm("Would you like Uppercase letters?");
var lowerCaseLetterConfirm = window.confirm("Would you like Lowercase letters?");
var numberConfirm = window.confirm("Would you like Numbers?");
var symbolConfirm = window.confirm("Would you like symbols?");
var newPassword = []
var index = []

function randomChoice(x){
   index = Math.floor(Math.random() * x.length);
   newPassword += x[index];
   console.log(newPassword);
}
// Create a confirm to start making password 

// Create prompt to collect user inputs


//Create a function that will collect and add all the parts together
var chooseCharacter = function(){
for (let i = 0; i < passLength; i++) {
  if (upperCaseLetterConfirm === true){
    randomChoice(upperCase)
    console.log(newPassword)
  }
  if (newPassword.length -- >= passLength){
break;
  }
  if (lowerCaseLetterConfirm === true){
    randomChoice(letters)
    console.log(newPassword)
  }
  if (newPassword.length -- >= passLength){
break;
  }
  if (numberConfirm === true){
    randomChoice(numbers)
    console.log(newPassword)
  }
  if (newPassword.length -- >= passLength){
break;
  }
  if (symbolConfirm === true){
    randomChoice(symbols)
    console.log(newPassword)
  }
  if (newPassword.length -- >= passLength){
break;
  }
}}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
chooseCharacter()
generateBtn.addEventListener("click", writePassword);
