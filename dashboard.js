// dashboard.js

// Dummy user data for demonstration purposes
const userData = {
    name: "John Doe",
    balance: "$5,000",
    transactions: [
        { date: "2024-11-25", description: "Grocery Store", amount: "-$100" },
        { date: "2024-11-24", description: "Salary", amount: "+$3,000" },
        { date: "2024-11-23", description: "Utility Bill", amount: "-$150" }
    ]
};

// Function to initialize the dashboard with user data
function initDashboard() {
    // Set user name
    document.getElementById("userName").innerText = userData.name;
    
    // Set account balance
    document.getElementById("bal").innerText = userData.balance;
    
    // Populate recent transactions
    const transactionList = document.getElementById("transaction-list");
    userData.transactions.forEach(transaction => {
        const listItem = document.createElement("li");
        listItem.innerText = `${transaction.date} - ${transaction.description}: ${transaction.amount}`;
        transactionList.appendChild(listItem);
    });
}

// Function to show the transfer funds modal
function showTransferModal() {
    document.getElementById("transferModal").style.display = "block";
}

// Function to close the transfer funds modal
function closeTransferModal() {
    document.getElementById("transferModal").style.display = "none";
}

// Function to handle Transfer Funds form submission
function processTransfer() {
    const recipientAccount = document.getElementById("recipientAccount").value;
    const recipientName = document.getElementById("recipientName").value;
    const amount = document.getElementById("amount").value;

    // For demonstration, just alert the details
    alert(`Transferring $${amount} to ${recipientName} (Account: ${recipientAccount})`);
    
    // Close the modal
    closeTransferModal();
}

// Function to show the pay bill modal
function showPayBillModal() {
    document.getElementById("payBillModal").style.display = "block";
}

// Function to close the pay bill modal
function closePayBillModal() {
    document.getElementById("payBillModal").style.display = "none";
}

// Function to handle Pay Bill form submission
function processPayBill() {
    const billAccount = document.getElementById("billAccount").value;
    const billAmount = document.getElementById("billAmount").value;

    // For demonstration, just alert the details
    alert(`Paying $${billAmount} to account ${billAccount}`);
    
    // Close the modal
    closePayBillModal();
}

// Initialize the dashboard when the window loads
window.onload = initDashboard;
