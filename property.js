// Filter Modal Functionality
function toggleFilter() {
    const modal = document.getElementById('filterModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('filterModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Category and Property Type Button Toggle
document.querySelectorAll('.category-buttons button, .property-types button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from siblings
        button.parentElement.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add active class to clicked button
        button.classList.add('active');
    });
});

// Price Range Slider
const priceSlider = document.querySelector('.price-slider');
const minPriceInput = document.querySelector('.price-inputs input:first-child');
const maxPriceInput = document.querySelector('.price-inputs input:last-child');

priceSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    maxPriceInput.value = new Intl.NumberFormat().format(value);
});

// Clear Filter
document.querySelector('.clear-btn').addEventListener('click', () => {
    // Reset all filters to default
    document.querySelectorAll('.category-buttons button, .property-types button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.category-buttons button:first-child, .property-types button:first-child').forEach(btn => {
        btn.classList.add('active');
    });
    priceSlider.value = 500000;
    minPriceInput.value = '5,000';
    maxPriceInput.value = '100,000';
});