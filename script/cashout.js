document.getElementById("cashout-withdraw-btn").addEventListener("click", function () {

    const number = getValueFromInput("agent-number");
    if (number.length != 11) {
        alert("Invalid Number");
        return;
    }

    const balance = getValueFromInput("balance")
    const cashoutAmount = getValueFromInput("cashout-amount");

    const newBalance = balance - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid Amount!");
        return;
    }



    const pin = getValueFromInput("cashout-pin");
    if (pin === "1234") {
        alert("Cashout Successfully");
    }
    else {
        alert("Cashout Failed!");
        return;
    }



})