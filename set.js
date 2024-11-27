// settings.js

// Function to handle saving settings
function saveSettings() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // For demonstration, just alert the details
    alert(`Saving changes:
    Username: ${username}
    Email: ${email}
    Phone: ${phone}
    Current Password: ${currentPassword}
    New Password: ${newPassword}
    Confirm Password: ${confirmPassword}`);

    // Add your logic to save the settings here
    // For example, making an API call to update user settings in the database
}
