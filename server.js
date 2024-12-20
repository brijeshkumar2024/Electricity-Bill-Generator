const express = require('express');
const sendOtpSms = require('./sendOtpSms');  // Import the OTP function

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Endpoint to handle OTP requests
app.post('/send-otp', (req, res) => {
    const { phoneNumber } = req.body;  // Get phone number from the request body
    const otp = generateOtp();  // Function to generate a random OTP

    // Send OTP to the provided phone number
    sendOtpSms(phoneNumber, otp);

    // Send response to the client
    res.json({ message: 'OTP sent successfully to your phone number.' });
});

// Generate a random 6-digit OTP
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);  // Generate random 6-digit OTP
};

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
