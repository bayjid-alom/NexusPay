document.getElementById("cashout-withdraw-btn").addEventListener("click", function () {

    const number = getValueFromInput("agent-number");
    if (number.length != 11) {
        alert("Invalid Number");
        return;
    }

    const balanceElement = document.getElementById("balance")

    let balance = getBalance("balance")
    const cashoutAmount = getValueFromInput("cashout-amount");
    let newBalance = balance - Number(cashoutAmount);
    console.log(newBalance)

    if (newBalance < 0) {
        alert("Invalid Amount!");
        return;
    }




    const pin = getValueFromInput("cashout-pin");
    if (pin === "1234") {
        alert("Cashout Successfully");
        // balanceElement.innerText = newBalance;
        setBalance(newBalance)
    }
    else {
        alert("Cashout Failed!");
        return;
    }



})