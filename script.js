// Assignment code here
var generateBtn = document.querySelector('#generate');

var onlyUpper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var onlyLower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var onlySpecial = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];
var onlyNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword() {
  var password = '';

  var availableCharacters = [];

  var passworLength = parseInt(prompt('How many characters would you like your password to contain?'));
  if (passworLength < 8) {
    alert('The password must be at least 8 characters!');
    return;
  }

  if (passworLength > 128) {
    alert('The password must be less than 128 characters!');
    return;
  }
  var shouldIncludeSpecialCharacters = confirm('Do you want to include special characters?');

  var shouldIncludeNumeric = confirm('Do you want to include numeric characters?');

  var shouldIncludeLowercase = confirm('Do you want to include lowercase characters?');

  var shouldIncludeUppercase = confirm('Do you want to include uppercase characters?');

  if (!shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecialCharacters) {
    alert('Your password must contain at least one special, numeric, lowercase, or uppercase character');
    return;
  }

  if (shouldIncludeSpecialCharacters) {
    availableCharacters = availableCharacters.concat(onlySpecial);
  }

  if (shouldIncludeNumeric) {
    availableCharacters = availableCharacters.concat(onlyNumeric);
  }

  if (shouldIncludeUppercase) {
    availableCharacters = availableCharacters.concat(onlyUpper);
  }

  if (shouldIncludeLowercase) {
    availableCharacters = availableCharacters.concat(onlyLower);
  }

  for (let i = 0; i < passworLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableCharacters.length);

    password += availableCharacters[randomIndex];
  }

  return password;
}

// Write password to the #password input

 function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
