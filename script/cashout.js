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
        alert(`Cash Out Successful! $${cashoutAmount} has been withdrawn from your account to ${number} at ${new Date().toLocaleString()}.`);
        // balanceElement.innerText = newBalance;
        setBalance(newBalance)


        // ❗ Transaction
        // step-1. find the container
        const historyContainer = document.getElementById("history-container")

        // step-2. create an element
        const divElement = document.createElement("div")

        // step-3. write innerHTML
        divElement.innerHTML = `
         <div
            class="history-card bg-base-100 text-neutral/80 text-sm leading-6 rounded-md border border-gray-200 p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md">

            Cash Out Successful! $${cashoutAmount} has been withdrawn from your account to ${number} at ${new Date().toLocaleString()}.
        </div>
        
        `;

        // step-4. append the child to the parent
        historyContainer.appendChild(divElement)
    }
    
    else {
        alert("Cashout Failed!");
        return;
    }



})