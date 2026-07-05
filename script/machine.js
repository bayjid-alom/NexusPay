function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}



function getBalance(id) {
    const balanceElem = document.getElementById(id);
    const balance = balanceElem.innerText;

    console.log("Amount :", balance)
    return Number(balance);
}



function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}


function showOnly(id) {
    const cashout = document.getElementById("cashout-section")
    const addmoney = document.getElementById("addmoney-section")
    const history = document.getElementById("history-container")
    const transfer = document.getElementById("transfer-section")
    const defaultSection = document.getElementById("default-section")

    cashout.classList.add("hidden");
    addmoney.classList.add("hidden")
    history.classList.add("hidden")
    transfer.classList.add("hidden")
    defaultSection.classList.add("hidden")

    const selected = document.getElementById(id)
    selected.classList.remove("hidden")
}