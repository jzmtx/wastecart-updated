document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the buy page
    if (document.title.includes('Buy Waste')) {
        const products = [
            { name: 'Plastic Bottle', manufacturer: 'Plastic Corp' },
            { name: 'Cardboard Box', manufacturer: 'Cardboard Inc.' },
            { name: 'Organic Compost', manufacturer: 'Compost LLC' }
        ];

        const productList = document.getElementById('product-list');
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - Manufacturer: ${product.manufacturer}`;
            productList.appendChild(listItem);
        });
    }

    // Check if we are on the wallet page
    if (document.title.includes('Wallet')) {
        const walletBalanceElement = document.getElementById('wallet-balance');
        const addFundsButton = document.getElementById('add-funds');
        const withdrawForm = document.getElementById('withdraw-form');
        const withdrawAmountInput = document.getElementById('withdraw-amount');

        // Add funds functionality
        addFundsButton.addEventListener('click', () => {
            let balance = parseFloat(walletBalanceElement.textContent.replace('₹', ''));
            balance += 10.00; // Mock adding ₹10
            walletBalanceElement.textContent = `₹${balance.toFixed(2)}`;
        });

        // Withdraw funds functionality
        withdrawForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let balance = parseFloat(walletBalanceElement.textContent.replace('₹', ''));
            let withdrawAmount = parseFloat(withdrawAmountInput.value);

            if (withdrawAmount > balance) {
                alert('Insufficient funds.');
            } else {
                balance -= withdrawAmount;
                walletBalanceElement.textContent = `₹${balance.toFixed(2)}`;
                withdrawAmountInput.value = ''; // Clear input field
            }
        });
    }
});
