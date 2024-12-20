const otpRequestForm = document.getElementById('otpRequestForm');
const otpSection = document.getElementById('otpSection');

otpRequestForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    // Send OTP request to backend
    try {
        const response = await fetch('http://localhost:3000/send-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const data = await response.json();
        if (response.ok) {
            alert(data.message); // OTP sent successfully
            otpSection.style.display = 'block';
        } else {
            alert(data.message); // Error in sending OTP
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
        console.error(error);
    }
});
