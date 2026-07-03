document.getElementById("login-btn").addEventListener("click", function () {
    const numberInput = document.getElementById("input-number");
    const number = numberInput.value;

    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;

    if (number.length != 11) {
        alert("Invalid Number")
    }

    if (pin == "1234") {
        alert("Login Successfully!");
        window.location.assign("home.html")
    }
    else {
        alert("Login Failed!");
        return;
    }
})