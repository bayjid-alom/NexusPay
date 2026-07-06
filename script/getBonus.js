document.getElementById("get-bonus-btn").addEventListener("click", function () {

    const coupon = getValueFromInput("bonus-coupon-input");


    const balance = getBalance("balance");
    const bonusAmount = parseInt(200);
    const newBalance = balance + Number(bonusAmount);


    if (coupon == "BAYJID18") {
        alert(`Bonus reward of $${bonusAmount} has been credited to your account using coupon "${coupon}" at ${new Date().toLocaleString()}.`);
        setBalance(newBalance)


        // ❗ Transaction
        // step-1. find the container
        const historyContainer = document.getElementById("history-container")

        // step-2. create an element
        const divElement = document.createElement("div")

        // step-3. write innerHTML
        divElement.innerHTML = `
         <div
            class="history-card bg-base-100 text-neutral/80 text-[16px] leading-6 rounded-md border border-gray-200 p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md">

            Bonus reward of $${bonusAmount} has been credited to your account using coupon "${coupon}" at ${new Date().toLocaleString()}.
        </div>
        
        `;

        // step-4. append the child to the parent
        historyContainer.appendChild(divElement)

    }
    else {
        alert(`Invalid coupon code "${coupon}". Please enter a valid bonus coupon and try again.`);
        return;
    }


})