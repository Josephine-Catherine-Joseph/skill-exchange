

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



     const users = JSON.parse(
        localStorage.getItem("skillverseUsers") || "[]"
    );

    const existingUser = users.some(
        user => user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
        alert("This email is already registered.");
        return;
    }

    users.push({
        id: Date.now(),
        name: name,
        email: email,
        phone: phone,
        location: location,
        skill: skill
    });

    localStorage.setItem(
        "skillverseUsers",
        JSON.stringify(users)
    );



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





/* =====================================
   SKILLVERSE ADMIN DEMO
   Frontend only - not production secure
   ===================================== */

// Change this demo code before testing.
// This code is visible to anyone who can inspect the JavaScript.
const ADMIN_REGISTRATION_CODE = "SV-ADMIN-2026";


// Get saved demo data safely
function getStoredArray(key) {
    try {
        const data = JSON.parse(localStorage.getItem(key) || "[]");
        return Array.isArray(data) ? data : [];
    } catch (error) {
        return [];
    }
}


// -----------------------------
// ADMIN SIGNUP
// -----------------------------

const adminSignupForm = document.getElementById("adminSignupForm");

if (adminSignupForm) {
    adminSignupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("adminName").value.trim();
        const email = document.getElementById("adminEmail").value.trim();
        const password = document.getElementById("adminPassword").value;
        const confirmPassword =
            document.getElementById("adminConfirmPassword").value;
        const phone = document.getElementById("adminPhone").value.trim();
        const location = document.getElementById("adminLocation").value.trim();
        const code = document.getElementById("adminCode").value;

        const namePattern = /^[A-Za-z ]+$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        const phonePattern = /^[0-9]{10}$/;
        const passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

        if (!namePattern.test(name) || !name.trim()) {
            alert("Enter a valid name using letters and spaces.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Enter a valid Gmail address ending with @gmail.com.");
            return;
        }

        if (!passwordPattern.test(password)) {
            alert(
                "Password must contain at least 8 characters, " +
                "uppercase and lowercase letters, a number, " +
                "and a special character."
            );
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Phone number must contain exactly 10 digits.");
            return;
        }

        if (!location) {
            alert("Please enter your location.");
            return;
        }

        if (code !== ADMIN_REGISTRATION_CODE) {
            alert("Incorrect admin registration code.");
            return;
        }

        const admins = getStoredArray("skillverseAdmins");

        if (admins.some(admin =>
            admin.email.toLowerCase() === email.toLowerCase()
        )) {
            alert("An admin account with this email already exists.");
            return;
        }

        // Demo only: storing passwords in localStorage is not secure.
        admins.push({
            id: Date.now(),
            name: name,
            email: email,
            password: password,
            phone: phone,
            location: location
        });

        localStorage.setItem("skillverseAdmins", JSON.stringify(admins));

        alert("Admin account created successfully!");
        window.location.href = "admin-login.html";
    });
}


// -----------------------------
// ADMIN LOGIN
// -----------------------------

const adminLoginForm = document.getElementById("adminLoginForm");

if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("adminLoginEmail")
            .value.trim();
        const password = document.getElementById("adminLoginPassword").value;

        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!emailPattern.test(email)) {
            alert("Enter a valid Gmail address ending with @gmail.com.");
            return;
        }

        const admins = getStoredArray("skillverseAdmins");

        const admin = admins.find(item =>
            item.email.toLowerCase() === email.toLowerCase() &&
            item.password === password
        );

        if (!admin) {
            alert("Invalid admin email or password.");
            return;
        }

        // Demo session: browser storage, not secure authentication.
        sessionStorage.setItem("skillverseAdminSession", admin.email);

        window.location.href = "admin-dashboard.html";
    });
}


// -----------------------------
// ADMIN SESSION CHECK
// -----------------------------

function getCurrentAdmin() {
    const sessionEmail =
        sessionStorage.getItem("skillverseAdminSession");

    if (!sessionEmail) {
        return null;
    }

    const admins = getStoredArray("skillverseAdmins");

    return admins.find(admin =>
        admin.email.toLowerCase() === sessionEmail.toLowerCase()
    ) || null;
}


// -----------------------------
// ADMIN DASHBOARD
// -----------------------------

function renderAdminDashboard() {
    const admin = getCurrentAdmin();

    // Do not display the dashboard without a demo login session.
    if (!admin) {
        window.location.replace("admin-login.html");
        return;
    }

    const welcome = document.getElementById("adminWelcome");
    const totalUsers = document.getElementById("totalUsers");
    const totalAdmins = document.getElementById("totalAdmins");
    const tableBody = document.getElementById("usersTableBody");
    const noUsersMessage = document.getElementById("noUsersMessage");
    const searchInput = document.getElementById("userSearch");

    if (!tableBody) {
        return;
    }

    if (welcome) {
        welcome.textContent = "Welcome, " + admin.name;
    }

    if (totalAdmins) {
        totalAdmins.textContent = getStoredArray("skillverseAdmins").length;
    }

    const users = getStoredArray("skillverseUsers");

    if (totalUsers) {
        totalUsers.textContent = users.length;
    }

    const searchTerm = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const filteredUsers = users.filter(user =>
        [user.name, user.email, user.location]
            .some(value =>
                String(value || "").toLowerCase().includes(searchTerm)
            )
    );

    tableBody.replaceChildren();

    filteredUsers.forEach(user => {
        const row = document.createElement("tr");

        const values = [
            user.name,
            user.email,
            user.phone,
            user.location,
            user.skill
        ];

        values.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value || "—";
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.type = "button";
        deleteButton.className = "delete-user-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            if (!confirm("Delete this demo user registration?")) {
                return;
            }

            const remainingUsers = getStoredArray("skillverseUsers")
                .filter(item => item.id !== user.id);

            localStorage.setItem(
                "skillverseUsers",
                JSON.stringify(remainingUsers)
            );

            renderAdminDashboard();
        });

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);
        tableBody.appendChild(row);
    });

    if (noUsersMessage) {
        noUsersMessage.hidden = filteredUsers.length > 0;
    }
}


// Only run dashboard setup on the dashboard page.
if (document.getElementById("usersTableBody")) {
    renderAdminDashboard();

    const searchInput = document.getElementById("userSearch");

    if (searchInput) {
        searchInput.addEventListener("input", renderAdminDashboard);
    }
}


// -----------------------------
// ADMIN LOGOUT
// -----------------------------

function adminLogout() {
    sessionStorage.removeItem("skillverseAdminSession");
    window.location.href = "admin-login.html";
}
