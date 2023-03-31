// Assignment Code
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specChar = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `\\`, `]`, `^`, `_`, `{`, `|`, `}`, `~`];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function generatePassword() {
  var incCaps = false;
  var incLow = false;
  var incNum = false;
  var incSpec = false;
  var incLength = 0;
  var array = [];

  incLength = window.prompt("How long would you like your pw to be?");
  console.log(incLength);
  console.log(typeof (incLength))
  if (incLength < 8 || incLength > 128) {
    window.alert("must be between 8 & 128")

    return;

  }

  incCaps = window.confirm("Would you like to include Capital letters?");
  console.log(incCaps);
  incLow = window.confirm("Would you like to include lower case letters?");
  console.log(incLow);
  incNum = window.confirm("Would you like to include Numbers?");
  console.log(incNum)
  incSpec = window.confirm("Would you like to inclue special characters?");
  console.log(incSpec);

  if (!incCaps && !incLow && !incNum && !incSpec) {
    window.alert("must choose at least 1 character type")
    return;
    }
  

  if (incCaps === true) {
    array = array.concat(capLetters)
  }
  if (incLow === true) {
    array = array.concat(lowLetters)
  }
  if (incNum === true) {
    array = array.concat(numbers)
  }
  if (incSpec === true) {
    array = array.concat(specChar)
  }
  console.log(array);


  var index = 0;
  var newPsw = "";

  for (let i = 0; i < incLength; i++) {
    var index = Math.floor(Math.random() * array.length)
    console.log(array[index])
    newPsw += array[index];
    console.log("newPsw = ", newPsw);
    // newPsw  += = newPsw + array[index];
  }

  return newPsw;

}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
