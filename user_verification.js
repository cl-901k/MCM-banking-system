// admin.js

function verifyUser(userId) {
    // Change the status to "Verified" and disable the button
    document.getElementById(`status-${userId}`).innerText = "Verified";
    const button = document.querySelector(`button[onclick="verifyUser(${userId})"]`);
    button.disabled = true;
    button.innerText = "Verified";

    // Optionally, you can add more logic here, such as making an API call to update the user status in the database
    alert(`User with ID ${userId} has been verified.`);
}
