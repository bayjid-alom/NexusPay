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
        // divElement.innerHTML = `
        //  <div
        //     class="history-card bg-base-100 text-neutral/80 text-[16px] leading-6 rounded-md border border-gray-200 p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md">

        //     Cash Out Successful! $${cashoutAmount} has been withdrawn from your account to ${number} at ${new Date().toLocaleString()}.
        // </div>
        
        // `



        divElement.innerHTML = `
        
<div
    class="history-card relative overflow-hidden rounded-xl border border-emerald-400/25 bg-gradient-to-br from-white via-emerald-50/40 to-green-100/30 p-5 shadow-[0_8px_30px_rgba(16,185,129,.12)] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_12px_40px_rgba(16,185,129,.25)]">

    <!-- Neon Glow -->
    <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none">
    </div>

    <div class="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-lime-300/20 blur-3xl pointer-events-none">
    </div>

    <!-- Gradient Border Shine -->
    <div
        class="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700">
    </div>

    <!-- Left Accent -->
    <div class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 via-green-500 to-lime-400">
    </div>

    <!-- Content -->
    <div class="relative flex items-center gap-4">

        <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-lg shadow-emerald-400/30">
            <i class="fa-solid fa-money-bill-transfer text-lg"></i>
        </div>

        <div class="flex-1 text-[16px] leading-7 text-neutral/80">
            
        Cash Out Successful! $${cashoutAmount} has been withdrawn from your account to ${number} at ${new Date().toLocaleString()}.
        </div>

    </div>

</div>
        `

        // step-4. append the child to the parent
        historyContainer.appendChild(divElement)
    }
    
    else {
        alert("Cashout Failed!");
        return;
    }



})