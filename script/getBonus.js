document.getElementById("get-bonus-btn").addEventListener("click", function () {

    const coupon = getValueFromInput("bonus-coupon-input");


    const balance = getBalance("balance");
    const bonusAmount = parseInt(200);
    const newBalance = balance + Number(bonusAmount);


    if (coupon == "BAYJID18") {
        alert("Bonus Claimed.");
        setBalance(newBalance)

    }
    else {
        alert("Entered wrong coupon code!");
        return;
    }
    console.log(newBalance)

})