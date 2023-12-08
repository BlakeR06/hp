const loginSubmit = document.getElementById('loginSubmit')
const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')

loginSubmit.addEventListener('click', function(){
    if (
        usernameInput.value &&
        passwordInput.value
    ) {
        // All fields have text, you can proceed with your logic
        alert('Sign up successful! Please continue to login.');
        usernameInput.value = '' 
        passwordInput.value = '' 
        window.location.href = 'Login.html'
    } else {
        // At least one field is empty
        alert('Please fill in all fields before submitting.');
        // Prevent the form from submitting
        event.preventDefault();
    }
})