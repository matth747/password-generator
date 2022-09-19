// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var passChars = ''
    var password = ''
    var passLength = prompt('Please pick a password length 8 or higher and no more than 128',)
    if (passLength >= 8 && passLength <=128) { 
        alert("thanks!")
        console.log(passLength)
    } else {generatePassword()}
    var upperLetters = confirm("would you like to include uppercase characters? click OK for yes or cancel for no")
    if (upperLetters === true) {passChars = passChars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
    
    var lowerLetters = confirm("would you like to include lowercase characters? click OK for yes or cancel for no")
    if (lowerLetters === true) {passChars = passChars + "abcdefghijklmnopqrstuvwxyz"}
    
    var specialChars = confirm("would you like to include special characters? click OK for yes or cancel for no")
    if (specialChars === true) {passChars = passChars + "!\"#&%&'()*+,-./:;<=>?@[]^_`{|}~"}
    
    var numChars = confirm("would you like to include numeric characters? click OK for yes or cancel for no")
    if (numChars === true) (passChars = passChars + "0123456789")
    console.log(passChars)
    for (var i = 0; i <= passLength; i++) {
        console.log(password)
        console.log(i)
        var randomNumber = Math.floor(Math.random() * passChars.length);
        password = password.concat(passChars.substring(randomNumber, 1));
        //randomNumber finds the spot in the array.  The 1 says how many to take starting at that spot
        console.log(password)
        console.log(randomNumber)                                                                                                                                                                               
    }
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword() ;
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);