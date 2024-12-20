// Store user data (simulating a database using localStorage)
function registerUser() {
    const name = document.getElementById("regName").value;
    const address = document.getElementById("regAddress").value;
    const password = document.getElementById("regPassword").value;

    if (!name || !address || !password) {
        alert("All fields are required!");
        return;
    }

    // Save user data to localStorage
    const userData = { name, address, password };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Registration successful!");
    window.location.href = "login.html"; // Redirect to login page
}

function loginUser() {
    const loginName = document.getElementById("loginName").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No user found. Please register first.");
        return;
    }

    if (storedUser.name === loginName && storedUser.password === loginPassword) {
        alert(`Welcome back, ${storedUser.name}!`);
        // Redirect to the electricity bill page
        window.location.href = "electricity-bill.html";
    } else {
        alert("Invalid name or password!");
    }
}
