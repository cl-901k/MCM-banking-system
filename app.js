import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        securityQuestion: '',
        securityAnswer: '',
        otpMethod: 'phone',
        otp: ''
    });
    const [otpSent, setOtpSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendOtp = () => {
        const otpMethod = formData.otpMethod;
        const contactDetails = otpMethod === 'phone' ? { phone: formData.phone } : { email: formData.email };

        const url = otpMethod === 'phone' ? 'http://localhost:3000/send-otp-sms' : 'http://localhost:3000/send-otp-email';

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactDetails)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('OTP sent successfully!');
                setOtpSent(true);
            } else {
                alert('Failed to send OTP. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send OTP. Please try again.');
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Registration successful!');
                window.location.href = '/login';
            } else {
                alert('Registration failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Registration failed. Please try again.');
        });
    };

    return (
        <div className="form-container">
            <h1>Create Your Account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required onChange={handleChange} />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handleChange} />
                
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required onChange={handleChange} />
                
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required onChange={handleChange} />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={handleChange} />
                
                <label htmlFor="securityQuestion">Security Question:</label>
                <select id="securityQuestion" name="securityQuestion" required onChange={handleChange}>
                    <option value="" disabled selected>Select a question</option>
                    <option value="pet">What is the name of your first pet?</option>
                    <option value="mother_maiden">What is your mother's maiden name?</option>
                    <option value="city">What city were you born in?</option>
                    <option value="favorite_color">What is your favorite color?</option>
                </select>
                
                <label htmlFor="securityAnswer">Answer:</label>
                <input type="text" id="securityAnswer" name="securityAnswer" required onChange={handleChange} />

                <label htmlFor="otpMethod">Send OTP via:</label>
                <select id="otpMethod" name="otpMethod" required onChange={handleChange}>
                    <option value="phone">Phone Number</option>
                    <option value="email">Email</option>
                </select>

                <button type="button" onClick={sendOtp}>Send OTP</button>

                {otpSent && (
                    <div id="otpSection">
                        <label htmlFor="otp">Enter OTP:</label>
                        <input type="text" id="otp" name="otp" required onChange={handleChange} />
                        <button type="submit">Register</button>
                    </div>
                )}
            </form>
            <p>Already have an account? <a href="login.html">Login here</a>.</p>
        </div>
    );
}

export default App;
