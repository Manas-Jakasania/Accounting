// Validate the Invoice Form
function validateInvoiceForm() {
    const clientName = document.getElementById("client-name").value;
    const invoiceAmount = document.getElementById("invoice-amount").value;
    const invoiceDate = document.getElementById("invoice-date").value;

    if (!validateName(clientName)) {
        alert("Client Name should only contain alphabets.");
        return false;
    }

    if (invoiceAmount === "" || isNaN(invoiceAmount) || invoiceAmount <= 0) {
        alert("Please enter a valid Invoice Amount.");
        return false;
    }

    if (invoiceDate === "") {
        alert("Invoice Date is required.");
        return false;
    }

    alert("Invoice successfully submitted!");
    document.getElementById("invoice-form").reset();
    return true;
}

// Validate the Transactions Form
function validateTransactionForm() {
    const transactionAmount = document.getElementById("transaction-amount").value;
    const transactionDescription = document.getElementById("transaction-description").value;
    const transactionDate = document.getElementById("transaction-date").value;

    if (transactionAmount === "" || isNaN(transactionAmount) || transactionAmount <= 0) {
        alert("Please enter a valid Transaction Amount.");
        return false;
    }

    if (transactionDate === "") {
        alert("Transaction Date is required.");
        return false;
    }

    if (!validateName(transactionDescription)) {
        alert("Description should only contain alphabets.");
        return false;
    }

    alert("Transaction successfully submitted!");
    document.getElementById("transaction-form").reset();
    return true;
}

// Validate the Contact Form
function validateContactForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!validateName(name)) {
        alert("Name should only contain alphabets.");
        return false;
    }

    if (!validateGmail(email)) {
        alert("Please enter a valid Gmail address (e.g., example@gmail.com).");
        return false;
    }

    if (message === "") {
        alert("Message is required.");
        return false;
    }

    alert("Your message has been sent successfully!");
    document.getElementById("contact-form").reset();
    return true;
}

// Helper function to validate name (alphabets only)
function validateName(name) {
    const namePattern = /^[A-Za-z\s]+$/; // Only allows alphabets and spaces
    return namePattern.test(name);
}

// Helper function to validate Gmail address
function validateGmail(email) {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Only allows email with @gmail.com domain
    return gmailPattern.test(email);
}

        function validateLoginForm() {
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            if (!email.endsWith("@gmail.com")) {
                alert("Only Gmail accounts are allowed.");
                return false;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return false;
            }

            alert("Login successful!");
            return true;
        }
    // Validate the Login Form
        function validateLoginForm() {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Validate Email for Gmail
            const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid Gmail address.");
                return false;
            }

            // Validate Password
            if (password === "") {
                alert("Password is required.");
                return false;
            }

            // If all validations pass
            alert("Login successful!"); // This will show the success message
            document.getElementById("loginForm").reset(); // Reset the form fields
            return true;
        }

        // Attach the validation to the login form
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();  // Prevent the default form submission
            if (validateLoginForm()) {
                // If validation is successful, you can redirect to another page if desired
                // window.location.href = "anotherPage.html"; // Uncomment this to redirect
            }
        });










