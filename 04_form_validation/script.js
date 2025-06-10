function validateForm(e) {
    e.preventDefault();
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const errorFirstname = document.getElementById("error-firstname");
    const errorLastname = document.getElementById("error-lastname");
    const errorEmail = document.getElementById("error-email");
    const errorContact = document.getElementById("error-contact");
    const errorPass1 = document.getElementById("error-pass1");
    const errorPass2 = document.getElementById("error-pass2");
    errorFirstname.innerText = "";
    errorLastname.innerText = "";
    errorEmail.innerText = "";
    errorContact.innerText = "";
    errorPass1.innerText = "";
    errorPass2.innerText = "";

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    let isValid = true;

    if (!nameRegex.test(firstname)) {
        errorFirstname.innerText = "First name must only contain letters.";
        isValid = false;
    }

    if (!nameRegex.test(lastname)) {
        errorLastname.innerText = "Last name must only contain letters.";
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        errorEmail.innerText = "Invalid email format.";
        isValid = false;
    }

    if (contact && !phoneRegex.test(contact)) {
        errorContact.innerText = "Contact must be a 10-digit number.";
        isValid = false;
    }

    if (pass1.length < 6) {
        errorPass1.innerText = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (pass1 !== pass2) {
        errorPass2.innerText = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful!");
        document.getElementById("myForm").reset();
    }
}

function loginForm(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const pass1 = document.getElementById("pass1").value;
    const errorEmail = document.getElementById("error-email");
    const errorPass1 = document.getElementById("error-pass1");
    errorEmail.innerText = "";
    errorPass1.innerText = "";
    const isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.innerText = "Invalid email format.";
        isValid = false;
    }
    if (pass1 === "") {
        errorPass1.innerText = "Please enter password";
        isValid = false;
    }
    if (isValid) {
        alert("Login successful");
        document.getElementById("loginForm").reset();
    }
}