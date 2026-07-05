document.getElementById("transfer-send-btn").addEventListener("click", function () {

    const number = getValueFromInput("transfer-account");
    if (number.length != 11) {
        alert("Invalid Number");
        return;
    }

    const balance = getBalance("balance")
    const transferAmount = getValueFromInput("transfer-amount");
    const newBalance = balance - Number(transferAmount);

    if (newBalance < 0) {
        alert("Invalid Amount!");
        return;
    }


    const pin = getValueFromInput("transfer-pin");

    if (pin === "1234") {
        alert(` Transfer Successful! Your transfer to account ${number} was completed successfully on ${new Date().toLocaleString()}.
        `)
        setBalance(newBalance)


    }
    else {
        alert("Transfer money failed!");
        return;
    }



})