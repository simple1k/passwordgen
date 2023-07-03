
//variable of password character group
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";


//Length of password element

const lengthEl = document.getElementById("length");

//lowercases of element
const lowercaseEl = document.getElementById("lowercase");

//uppercases of element
const uppercaseEl = document.getElementById("uppercase");

//numbers of element
const numbersEl = document.getElementById("numbers");

//symbols of element
const symbolsEl = document.getElementById("symbols");


const genrateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

genrateBtn.addEventListener("click", function(){


    const length = lengthEl.value;
    var characters = "";
    var password = "";

    if (lowercaseEl.checked){
        characters += lowercaseLetters;
    }

    if (uppercaseEl.checked){
        characters += uppercaseLetters;
    }
    
    if (numbersEl.checked){
        characters += numbers;
    }
    
    if (symbolsEl.checked){
        characters += symbols;
    }
    
    for (var i = 0; i < length; i++){

        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordEl.value = password;


});