// function activated when the "Generate Password" button is clicked
function masterFunction() {
    //Get the status of the checkboxes
    var includeUC = document.getElementById("UppercaseCheck");
    var includeLC = document.getElementById("LowercaseCheck");
    var includeNC = document.getElementById("NumericCheck");
    var includeSC = document.getElementById("SpecialCheck");

    // Create booleans for each checkbox status
    var UC = includeUC.checked;
    var LC = includeLC.checked;
    var NC = includeNC.checked;
    var SC = includeSC.checked;

    // alert(UC + " " + LC + " " + NC + " " + SC);

    //check to insure that at least one checkbox is selected, if not, exits the function
    if(!(UC || LC || NC || SC)){
        alert("Please ensure at least one character type is selected");
        return;
    }

    // alert("Include Uppercase: " + UC)
    // alert("Include Lowercase: " + LC)
    // alert("Include Numeric: " + NC)
    // alert("Include Special: " + SC)
    length = getLengthfromSlider();


    password = generatePassword(length, UC, LC, NC, SC);

    // check to make sure there is at least one character from each requested group in 
    // the generated password, if not, generate another password and recheck
    while(!(checkCharactersExist(password, UC, LC, NC, SC))) {
        password = generatePassword(length, UC, LC, NC, SC);
    }


    // update the password field on the page
    document.getElementById('passwordField').value = password;
}

// Deprecated function to get user's desired password length and ensure it's within 8 to 128
// This uses a prompt, changed to getting input from text field and eventually slider
function getLength() {
    console.log("Entering getLength function");
    var length = prompt("How many characters do you want? (8-128)"); 
    var int = parseInt(length); 

    // check if desired length is in range, if not, prompt again
    while(int < 8 || int > 128)
    {
        alert("Must be between 8 and 128");
        length = prompt("How many characters do you want? (8-128)");
        int = parseInt(length);
    }

    return length;
}

// Deprecated function to get the length from a text field.  If using this function,
// would need to check that the value was in appropriate 8 to 128 range.
function getLengthfromText() {
    var lengthText = document.getElementById("passwordLength");

    var int = parseInt(lengthText.value);
    console.log("int " + int);

    return int;

}

// Gets the length from the slider.  As the only allowed values are in the accepted 8 to 128
// character range, no need to validate inputs.
function getLengthfromSlider() {
    var length = slider.value;
    console.log("slider value = " + length);

    return length;
}






function generatePassword(length, UC, LC, NC, SC) {

    var upperletterarray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowerletterarray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numericarray =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var unicodearray = ['\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027','\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];

    var password = "";

    // build master array concatenated from underlying arrays based on the booleans passed in
    var masterArray = [];
    
    // if uppercase characters were requested, include them in the master array
    if(UC == true) {
        masterArray = masterArray.concat(upperletterarray);
    }

    // if lowercase characters were requested, include them in the master array
    if(LC == true) {
    masterArray = masterArray.concat(lowerletterarray);
    }

    // if numeric characters were requested, include them in the master array
    if(NC == true) {
        masterArray = masterArray.concat(numericarray);
    }

    // if special characters were requested, include them in the master array
    if(SC == true) {
    masterArray = masterArray.concat(unicodearray);
    }

    // console.log(masterArray);
    
    // iterate over the requested length of the password, generating  a random character
    // from the master array (the requested character sets), until the password is the correct length 

    for(var i = 0; i < length; i++)
    {
    var randomIndex = generateRandomNumber(masterArray.length);
    var randomChar = masterArray[randomIndex];
    // console.log(randomChar);
    password += randomChar;

    }

    console.log("final password is: " + password);
    return password;
}

// generates a random integer between 0 and max - 1
function generateRandomNumber(max) {
    var rand = Math.floor(Math.random() * max);
    // console.log("max = " + max + " rand = " + rand);

    return rand;
}



// Check if each category of character that is requested (represented by boolean value true)
// is included in the password.  Return true if all characters included, otherwise false
function checkCharactersExist(password, UC, LC, NC, SC) {
    
    var upperletterarray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowerletterarray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numericarray =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var unicodearray = ['\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027','\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];

    var r1, r2, r3, r4, result;
    r1 = true;
    r2 = true;
    r3 = true;
    r4 = true;

    // If UC is true, there must be at least one uppercase character in string to meet requirements
    // If there is, set r1 to true, otherwise false
    if(UC) {
        r1 = checkPasswordAgainstArray(password, upperletterarray);
    }

    // If LC is true, there must be at least one lowercase character in string to meet requirements
    // If there is, set r2 to true, otherwise false
    if(LC) {
        r2 = checkPasswordAgainstArray(password, lowerletterarray);
    }

    // If NC is true, there must be at least one numeric character in string to meet requirements
    // If there is, set r3 to true, otherwise false
    if(NC) {
        r3 = checkPasswordAgainstArray(password, numericarray);
    }

    // If SC is true, there must be at least one special character in string to meet requirements
    // If there is, set r4 to true, otherwise false
    if(SC) {
        r4 = checkPasswordAgainstArray(password, unicodearray);
    }

    // All the r variables will be true if either 1) the character type is not required in the password, or
    // 2) it is required and it is included in the password.  Otherwise, it will be false, and so will result.
    result = (r1 && r2 && r3 && r4);

    console.log("result = " + result)
    return result;

}

// pass in a string password and an array characterarray
// return true if password has any characters from characterarray, false otherwise
function checkPasswordAgainstArray(password, characterarray) {
    for(var i = 0; i < password.length; i++) {
        for(var j = 0; j < characterarray.length; j++) {
            if(password[i] == characterarray[j])
                return true;
        }
    }

    return false;
}


// Copies the text in the password field to the clipboard
function copyPasswordtoClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("passwordField");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    // alert("Copied the text: " + copyText.value);
}


// Code to display the value of the slider
var slider = document.getElementById("myRange");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}