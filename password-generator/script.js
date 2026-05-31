const uppercaseChars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercaseChars =
"abcdefghijklmnopqrstuvwxyz";

const numberChars =
"0123456789";

const symbolChars =
"!@#$%^&*()_+[]{}<>?/";

const lengthSlider =
document.getElementById("length");

const lengthValue =
document.getElementById("lengthValue");

lengthSlider.addEventListener("input", function(){

    lengthValue.textContent =
    lengthSlider.value;

});

function generatePassword(){

    let chars = "";

    if(document.getElementById("uppercase").checked){
        chars += uppercaseChars;
    }

    if(document.getElementById("lowercase").checked){
        chars += lowercaseChars;
    }

    if(document.getElementById("numbers").checked){
        chars += numberChars;
    }

    if(document.getElementById("symbols").checked){
        chars += symbolChars;
    }

    if(chars === ""){
        alert("Select at least one option");
        return;
    }

    let password = "";

    let length =
    lengthSlider.value;

    for(let i=0; i<length; i++){

        let randomIndex =
        Math.floor(
            Math.random() * chars.length
        );

        password += chars[randomIndex];
    }

    document.getElementById("password").value =
    password;
}

function copyPassword(){

    let password =
    document.getElementById("password");

    if(password.value === ""){
        alert("Generate password first");
        return;
    }

    navigator.clipboard.writeText(
        password.value
    );

    alert("Password Copied");
}