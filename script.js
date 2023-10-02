
document.addEventListener("DOMContentLoaded", function () {
    var passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");
    var email = document.getElementById("email");
    var emailError = document.getElementById("emailerror");
    var url = document.getElementById("url");
    var urlError = document.getElementById("urlerror");

    // Function to validate the password
    function validatePassword() {
        var password = passwordInput.value;
        var minLength = 8;
        var hasUppercase = /[A-Z]/.test(password);
        var hasLowercase = /[a-z]/.test(password);
        var hasNumber = /\d/.test(password);

        if (password.length < minLength || !hasUppercase || !hasLowercase || !hasNumber) {
            passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
        } else {
            passwordError.textContent = "";
        }
    }

    // Function to validate the email
    function validateEmail() {
        var userEmail = email.value;
        var emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(userEmail);

        if (!emailReg) {
            emailError.textContent = "Please enter a valid email";
        } else {
            emailError.textContent = "";
        }
    }

    // Function to validate the URL
    function validateURL() {
        var urlVal = url.value;
        var urlRegex = /^(http|https):\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(urlVal);

        if (!urlRegex) {
            urlError.textContent = "Please enter a valid URL starting with 'http://' or 'https://'";
        } else {
            urlError.textContent = "";
        }
    }

    // Add blur event listeners for validation
    passwordInput.addEventListener("blur", validatePassword);
    email.addEventListener("blur", validateEmail);
    url.addEventListener("blur", validateURL);

    // Prevent form submission if there are validation errors
    var passwordForm = document.getElementById("passwordForm");
    passwordForm.addEventListener("submit", function (event) {
        if (!validatePassword() || !validateEmail() || !validateURL()) {
            event.preventDefault();
        }
    });
});
