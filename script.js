const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let formValid = true;
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");

    if (nameInput.value.trim().length < 2) {
        nameError.style.display = "block";
        formValid = false;
    } else {
        nameError.style.display = "none";
    }

    const addressInput = document.getElementById("address");
    const addressError = document.getElementById("address-error");

    if (addressInput.value.trim().length < 2) {
        addressError.style.display = "block";
        formValid = false;
    } else {
        addressError.style.display = "none";
    }

    const emailInput = document.getElementById("email");
    const emailError = emailInput.nextElementSibling;

    if (emailInput.value.length < 6) {
        emailError.style.display = "block";
        formValid = false;
    } else {
        emailError.style.display = "none";
    }

    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phone-error");
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (!phonePattern.test(phoneInput.value)) {
        phoneError.style.display = "block";
        formValid = false;
    } else {
        phoneError.style.display = "none";
    }

    const ageInput = document.getElementById("age");
    const ageError = document.getElementById("age-error");

    if (ageInput.value < 0 || ageInput.value === "") {
        ageError.style.display = "block";
        formValid = false;
    } else {
        ageError.style.display = "none";
    }

    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("password-error");

    if (passwordInput.value.trim().length < 2) {
        passwordError.style.display = "block";
        formValid = false;
    } else {
        passwordError.style.display = "none";
    }

    const newsletter = document.getElementById("newsletter");
    const newsletterError = document.getElementById("newsletter-error");

    if (!newsletter.checked) {
        newsletterError.style.display = "block";
        formValid = false;
    } else {
        newsletterError.style.display = "none";
    }

    if (formValid) {
        console.log("Form submitted successfully!");
        this.submit();
    }
})