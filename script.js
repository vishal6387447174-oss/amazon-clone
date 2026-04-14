document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sign In / Login Functionality
    const signInBtn = document.querySelector('.nav-signin');
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            // Simulating a login prompt
            const userEmail = prompt('Sign In\n\nEnter your email or mobile phone number:');
            if (userEmail) {
                alert(`Welcome back! You are now logging in as: ${userEmail}`);
            } else {
                alert('Sign in cancelled.');
            }
        });
    }

    // 2. Returns & Orders Functionality
    const returnsBtn = document.querySelector('.nav-return');
    if (returnsBtn) {
        returnsBtn.addEventListener('click', () => {
            // Simulating checking orders
            alert('Loading your order history...\n\nYou have no recent returns or orders.');
        });
    }

    // 3. Cart Functionality
    const cartBtn = document.querySelector('.nav-cart');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            // Simulating cart checkout
            alert('Your Amazon Cart is empty.\n\nShop today\'s deals to add items to your cart!');
        });
    }

});