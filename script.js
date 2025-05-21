const password = document.getElementById("password");
const confirmPassword = document.getElementById("cpassword");
const button = document.getElementById("signupButton");
const errorMessage = document.getElementById("error");

function validatePassword() {
    if(!confirmPassword.value) {
        errorMessage.textContent = "";
        return true;

    }
    else {
        if(password.value !== confirmPassword.value) {
            errorMessage.textContent = "Passwords do not match!";
        }
        else {
            errorMessage.textContent = "";
        }
    }
}


confirmPassword.addEventListener('input', validatePassword);
password.addEventListener('input', validatePassword);

signupButton.addEventListener("click", function(event) {
    if(!validatePassword()) {
        event.preventDefault();
    }
});