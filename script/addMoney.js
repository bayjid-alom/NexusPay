document.getElementById("addmoney-btn").addEventListener("click", function () {

    const bank = getValueFromInput("bank-select");
    if (bank == "") {
        alert("Please select a bank!");
        return;
    }

    const number = getValueFromInput("account-number");
    if (number.length != 11) {
        alert("Invalid Number!");
        return;
    }

    const balance = getBalance("balance");
    const addAmount = getValueFromInput("add-amount");
    const newBalance = balance + Number(addAmount);

    const pin = getValueFromInput("add-pin");
    console.log("Pin - ", pin)
    if (pin === "1234") {
        alert(`Add Money Successful! $ ${addAmount} has been added to your account from ${bank} (${number}) at ${new Date().toLocaleString()}
        `);

        setBalance(newBalance)
    }
    else {
        alert("Add money Failed!")
    }


})