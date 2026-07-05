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


        // ❗ Transaction
        // step-1. find the container
        const historyContainer = document.getElementById("history-container")

        // step-2. create an element
        const divElement = document.createElement("div")

        // step-3. write innerHTML
        divElement.innerHTML = `
         <div
            class="history-card bg-base-100 text-neutral/80 text-sm leading-6 rounded-md border border-gray-200 p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md">

            Add Money Successful! $ ${addAmount} has been added to your account from ${bank} (${number}) at ${new Date().toLocaleString()}
        </div>
        
        `;

        // step-4. append the child to the parent
        historyContainer.appendChild(divElement)

    }
    else {
        alert("Add money Failed!")
    }


})