require('dotenv').config();
const twilio = require('twilio');

// Initialize Twilio client with your credentials from the .env file
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Function to send OTP via SMS
const sendOtpSms = (toPhoneNumber, otp) => {
    const fromPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio phone number

    client.messages
        .create({
            body: `Your OTP is: ${otp}`,
            to: toPhoneNumber, // Phone number you want to send the OTP to
            from: fromPhoneNumber // Your Twilio phone number
        })
        .then(message => console.log(`OTP sent to ${toPhoneNumber}: ${message.sid}`))
        .catch(error => console.error(`Error sending OTP: ${error}`));
};

module.exports = sendOtpSms;
