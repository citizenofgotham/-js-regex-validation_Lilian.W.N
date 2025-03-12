// Add event listener for form submission
document.getElementById('validationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
});

// Function to validate the entire form
function validateForm() {
    // Declare variables using `let`
    let fullName = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let password = document.getElementById('password').value.trim();

    // Check if any field is empty
    if (fullName === '' || email === '' || phone === '' || password === '') {
        document.getElementById('successMessage').textContent = 'Please fill out all fields.';
        return;
    }

    let nameValid = validateName(fullName);
    let emailValid = validateEmail(email);
    let phoneValid = validatePhone(phone);
    let passwordValid = validatePassword(password);

    if (nameValid && emailValid && phoneValid && passwordValid) {
        alert('Form submitted successfully!'); // Pop-up message
        document.getElementById('successMessage').textContent = '✅ Form submitted successfully!';
        // Optionally, you can reset the form after successful submission
        document.getElementById('validationForm').reset();
    } else {
        document.getElementById('successMessage').textContent = '';
    }
}

// Real-time validation for Full Name
document.getElementById('fullName').addEventListener('input', function () {
    validateName(this.value.trim());
});

// Real-time validation for Email
document.getElementById('email').addEventListener('input', function () {
    validateEmail(this.value.trim());
});

// Real-time validation for Phone Number
document.getElementById('phone').addEventListener('input', function () {
    validatePhone(this.value.trim());
});

// Real-time validation for Password
document.getElementById('password').addEventListener('input', function () {
    validatePassword(this.value.trim());
});

// Function to validate Full Name
function validateName(name) {
    if (name === '') {
        document.getElementById('nameError').textContent = 'Please fill out this field.';
        document.getElementById('fullName').style.borderColor = '#ff0000';
        return false;
    }
    let regex = /^[A-Za-z\s]+$/; // Declare regex using `let`
    if (!regex.test(name)) {
        document.getElementById('nameError').textContent = 'Invalid name (only alphabetic characters and spaces allowed).';
        document.getElementById('fullName').style.borderColor = '#ff0000';
        return false;
    } else {
        document.getElementById('nameError').textContent = '';
        document.getElementById('fullName').style.borderColor = '#D76C82';
        return true;
    }
}

// Function to validate Email
function validateEmail(email) {
    if (email === '') {
        document.getElementById('emailError').textContent = 'Please fill out this field.';
        document.getElementById('email').style.borderColor = '#ff0000';
        return false;
    }
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Declare regex using `let`
    if (!regex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        document.getElementById('email').style.borderColor = '#ff0000';
        return false;
    } else {
        document.getElementById('emailError').textContent = '';
        document.getElementById('email').style.borderColor = '#D76C82';
        return true;
    }
}

// Function to validate Phone Number
function validatePhone(phone) {
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Please fill out this field.';
        document.getElementById('phone').style.borderColor = '#ff0000';
        return false;
    }
    let regex = /^\d{10,15}$/; // Declare regex using `let`
    if (!regex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number (10-15 digits only).';
        document.getElementById('phone').style.borderColor = '#ff0000';
        return false;
    } else {
        document.getElementById('phoneError').textContent = '';
        document.getElementById('phone').style.borderColor = '#D76C82';
        return true;
    }
}

// Function to validate Password
function validatePassword(password) {
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Please fill out this field.';
        document.getElementById('password').style.borderColor = '#ff0000';
        return false;
    }
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Declare regex using `let`
    if (!regex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, and one number.';
        document.getElementById('password').style.borderColor = '#ff0000';
        return false;
    } else {
        document.getElementById('passwordError').textContent = '';
        document.getElementById('password').style.borderColor = '#D76C82';
        return true;
    }
}
