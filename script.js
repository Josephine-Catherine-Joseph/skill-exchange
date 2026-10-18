

let generatedOTP;

// -----------------------------
// OTP FUNCTIONS
// -----------------------------

function sendOTP() {
    generatedOTP = Math.floor(100000 + Math.random() * 900000);

    alert("Your OTP is: " + generatedOTP);
}

function verifyOTP() {
    let enteredOTP = document.getElementById("otp").value;

    if (enteredOTP == generatedOTP) {
        alert("OTP verified successfully!");
    } else {
        alert("Incorrect OTP!");
    }
}


// -----------------------------
// LOGIN FUNCTION
// -----------------------------

function login() {

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    // Check empty fields
    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    // Check Gmail format
    let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid Gmail address ending with @gmail.com.");
        return;
    }

    // Login successful
    alert("Login successful!");

    window.location.href = "home.html";
}


// -----------------------------
// SIGNUP VALIDATION
// -----------------------------

function signup() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phone = document.getElementById("phone").value.trim();
    let location = document.getElementById("location").value.trim();
    let skill = document.getElementById("skill").value.trim();


    // -------------------------
    // NAME VALIDATION
    // -------------------------

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Name should contain letters
    let namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        alert("Name should contain only letters and spaces.");
        return;
    }

    // Name should not be only spaces
    if (name.replace(/\s/g, "").length === 0) {
        alert("Please enter a valid name.");
        return;
    }


    // -------------------------
    // EMAIL VALIDATION
    // -------------------------

    let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid Gmail address ending with @gmail.com.");
        return;
    }


    // -------------------------
    // PASSWORD VALIDATION
    // -------------------------

    /*
        Password requirements:
        - At least 8 characters
        - One uppercase letter
        - One lowercase letter
        - One number
        - One special character
    */

    let passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    
    if (!passwordPattern.test(password)) {
        alert(
            "Password must contain at least 8 characters, " +
            "one uppercase letter, one lowercase letter, " +
            "one number and one special character."
        );
        return;
    }


    // -------------------------
    // CONFIRM PASSWORD
    // -------------------------

    if (confirmPassword === "") {
        alert("Please confirm your password.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }


    // -------------------------
    // PHONE VALIDATION
    // -------------------------

    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return;
    }


    // -------------------------
    // LOCATION VALIDATION
    // -------------------------

    if (location === "") {
        alert("Please enter your location.");
        return;
    }


    // -------------------------
    // SKILL VALIDATION
    // -------------------------

    if (skill === "") {
        alert("Please enter a skill you can offer.");
        return;
    }


    // -------------------------
    // SUCCESS
    // -------------------------

    alert("Account created successfully!");

    window.location.href = "login.html";
}


// -----------------------------
// PAGE NAVIGATION
// -----------------------------

function goToLogin() {
    window.location.href = "login.html";
}

function goToSignup() {
    window.location.href = "signup.html";
}