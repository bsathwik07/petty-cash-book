let balance = 0;

function showForm(type) {
    document.getElementById('expense-form').style.display = 'none';
    document.getElementById('income-form').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';

    if (type === 'expense') {
        document.getElementById('expense-form').style.display = 'block';
    } else {
        document.getElementById('income-form').style.display = 'block';
    }
}

function updateBalance() {
    document.getElementById('balance').innerText = balance.toFixed(2);
}

function addRecord(date, type, description, amount, category) {
    const tbody = document.getElementById('records');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${date}</td>
        <td>${type}</td>
        <td>${description}</td>
        <td>₹${amount.toFixed(2)}</td>
        <td>${category}</td>
    `;

    tbody.appendChild(row);
}

function handleExpense(event) {
    event.preventDefault();
    const date = document.getElementById('expense-date').value;
    const type = document.getElementById('expense-type').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const description = document.getElementById('expense-description').value;

    balance -= amount;
    updateBalance();
    addRecord(date, type, description, amount, 'Expense');
    event.target.reset();
}

function handleIncome(event) {
    event.preventDefault();
    const date = document.getElementById('income-date').value;
    const type = document.getElementById('income-type').value;
    const amount = parseFloat(document.getElementById('income-amount').value);
    const description = document.getElementById('income-description').value;

    balance += amount;
    updateBalance();
    addRecord(date, type, description, amount, 'Income');
    event.target.reset();
}
