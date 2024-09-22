const form = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    // Validate form
    if (name && from && to && date && time) {
        successMessage.classList.remove('hidden');
        successMessage.textContent = `Ticket booked successfully for ${name} from ${from} to ${to} on ${date} at ${time}!`;

        // Clear form
        form.reset();
    }
});
