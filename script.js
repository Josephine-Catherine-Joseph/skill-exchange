alert("Welcome to SkillVerse!");

let generatedOTP;

function sendOTP() {

    generatedOTP = Math.floor(100000 + Math.random() * 900000);

    alert("Your OTP is: " + generatedOTP);

}

function verifyOTP() {

    let enteredOTP = document.getElementById("otp").value;

    if (enteredOTP == generatedOTP) {
        alert("OTP verified successfully!");
    }
    else {
        alert("Incorrect OTP!");
    }

}

function login() {
    window.location.href = "home.html";
}

function goToSignup() {
    window.location.href = "signup.html";
}

function signup() {
    alert("Account created successfully!");
    window.location.href = "login.html";
}

function goToLogin() {
    window.location.href = "login.html";
}

function goToSignup() {
    window.location.href = "signup.html";
}
