const nameInput = document.getElementById('nameInput');
const lastNameInput = document.getElementById('lastNameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const addressInput = document.getElementById('addressInput');
const cityInput = document.getElementById('cityInput');
const stateInput = document.getElementById('stateInput');
const zipInput = document.getElementById('zipInput');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(event) {
    if (
        nameInput.value &&
        lastNameInput.value &&
        emailInput.value &&
        phoneInput.value &&
        addressInput.value &&
        cityInput.value &&
        stateInput.value &&
        zipInput.value
    ) {
        // All fields have text, you can proceed with your logic
        alert('Form submitted successfully!');
        nameInput.value = '' 
        lastNameInput.value = '' 
        emailInput.value = '' 
        phoneInput.value = '' 
        addressInput.value = '' 
        cityInput.value = '' 
        stateInput.value = '' 
        zipInput.value = ''
        window.location.href = 'index.html'
    } else {
        // At least one field is empty
        alert('Please fill in all fields before submitting.');
        // Prevent the form from submitting
        event.preventDefault();
    }
});
