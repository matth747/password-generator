// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var passChars = ''
    var password = ''
    var passLength = prompt('Please pick a password length 8 or higher and no more than 128',)
    //asked how long the password should be and assigned it to a var
    if (passLength >= 8 && passLength <=128) { 
        alert("thanks!")
        console.log(passLength)
    } else {generatePassword()}
    //4 if statements ask which characters to include
    var upperLetters = confirm("would you like to include uppercase characters? click OK for yes or cancel for no")
    if (upperLetters === true) {passChars = passChars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
    
    var lowerLetters = confirm("would you like to include lowercase characters? click OK for yes or cancel for no")
    if (lowerLetters === true) {passChars = passChars + "abcdefghijklmnopqrstuvwxyz"}
    
    var specialChars = confirm("would you like to include special characters? click OK for yes or cancel for no")
    if (specialChars === true) {passChars = passChars + "!\"#&%&'()*+,-./:;<=>?@[]^_`{|}~"}
    
    var numChars = confirm("would you like to include numeric characters? click OK for yes or cancel for no")
    if (numChars === true) {passChars = passChars + "0123456789"}
    console.log(passChars)
    //if the user doesn't select any char types they will be asked to try again generatePassword starts over
    if (passChars === '') {alert('please try again and select at least one character type')
    generatePassword()
    }
    //for loop runs as many times as passLength var says.   
    //Each time through it picks a random character out of the pool represented by passChars.
    for (var i = 0; i <= passLength; i++) {
        console.log(password)
        console.log(i)
        var randomNumber = Math.floor(Math.random() * passChars.length);
        password = password.concat(passChars.charAt(randomNumber));
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