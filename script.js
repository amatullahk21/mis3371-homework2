/*
Program name: script.js
Author: Amatullah Kanchwala
Date created: 03/27/2026
Version: 1.0
Description: JavaScript functions for Homework 2 review and validation.
*/

function updateSlider(value) {
    document.getElementById("healthValue").textContent = value;
}

function reviewForm() {
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const health = document.getElementById("health").value;
    const userIdInput = document.getElementById("userid");
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    userIdInput.value = userIdInput.value.toLowerCase();
    const userId = userIdInput.value.trim();

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*()\-_\+=\\\/><\.,`~])[^\"]{8,30}$/;

    if (!passwordPattern.test(password)) {
        alert("Password must be 8 to 30 characters and include an uppercase letter, lowercase letter, number, and special character. Double quotes are not allowed.");
        return;
    }

    if (userId !== "" && password.toLowerCase().includes(userId.toLowerCase())) {
        alert("Password cannot contain your user ID.");
        return;
    }

    const reviewText = `
        <strong>Please review this information:</strong><br><br>
        <strong>First Name:</strong> ${firstName}<br>
        <strong>Last Name:</strong> ${lastName}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Phone:</strong> ${phone}<br>
        <strong>Health Level:</strong> ${health}<br>
        <strong>User ID:</strong> ${userId}
    `;

    document.getElementById("reviewOutput").innerHTML = reviewText;
}
