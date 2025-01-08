document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
document.querySelector('.cart-icon a').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent navigation
    alert('Your cart is being processed!');
});
