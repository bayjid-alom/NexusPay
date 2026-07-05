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


        // ❗ Transaction
        // step-1. find the container
        const historyContainer = document.getElementById("history-container")

        // step-2. create an element
        const divElement = document.createElement("div")

        // step-3. write innerHTML
        divElement.innerHTML = `
         <div
            class="history-card bg-base-100 text-neutral/80 text-sm leading-6 rounded-md border border-gray-200 p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md">

            Transfer Successful! Your transfer to account ${number} was completed successfully on ${new Date().toLocaleString()}.
        </div>
        
        `;

        // step-4. append the child to the parent
        historyContainer.appendChild(divElement)

    }

    else {
        alert("Transfer money failed!");
        return;
    }

})