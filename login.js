document.getElementById('adminForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const staffNumber = document.getElementById('staffNumber').value;
    const adminPassword = document.getElementById('adminPassword').value;

    // Simulate a login process (replace this with actual authentication logic)
    if (staffNumber === '1324' && adminPassword === 'password123') {
        console.log('Login Successful! Welcome!');
        alert("Successful login");
        // Redirect or load the user dashboard here
        window.location.href= 'admin_dashboard.html';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password. Please try again.';
    }
    
});
document.getElementById('customerForm').addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    if (username === 'Mwangi' && password === 'm1234'){
        console.log('Login Successful!');
        alert("Login Successful, Welcome!");
        window.location.href ='dashboard.html';
    } else {
        alert("Invalid details, check and try again!");
    }
});