document.addEventListener('DOMContentLoaded', function() {
    // Alert button functionality
    const alertButton = document.getElementById('alertButton');
    
    if (alertButton) {
        alertButton.addEventListener('click', function() {
            alert('🌍 Welcome to Wanderlust Travel Blog! \n\nGet ready for exclusive travel tips and destination guides straight to your inbox. Subscribe to our newsletter for the latest updates!');
        });
    }
    
    // Newsletter form validation 
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value && isValidEmail(emailInput.value)) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});