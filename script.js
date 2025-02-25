let balance = 0;

function addTransaction() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (description === "" || isNaN(amount)) {
        alert("Please enter a valid description and amount.");
        return;
    }

    if (type === "income") {
        balance += amount;
        addTransactionToList(description, amount, "Income");
    } else {
        balance -= amount;
        addTransactionToList(description, amount, "Expense");
    }

    document.getElementById("balance").innerText = `$${balance.toFixed(2)}`;
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}

function addTransactionToList(description, amount, type) {
   const transactionList = document.getElementById("transaction-list");
   const li = document.createElement("li");
   li.textContent = `${description}: $${amount.toFixed(2)} (${type})`;
   transactionList.appendChild(li);
}
