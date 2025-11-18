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
})