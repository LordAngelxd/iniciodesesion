document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Remove error messages on input
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const errorElement = document.getElementById(input.id + 'Error');
            if (errorElement) {
                errorElement.textContent = '';
            }
            input.parentElement.classList.remove('shake');
        });
    });
});

function validateForm() {
    const username = document.getElementById('nombre');
    const password = document.getElementById('password');
    const userError = document.getElementById('userError');
    const passwordError = document.getElementById('passwordError');
    let isValid = true;

    // Reset error messages
    userError.textContent = '';
    passwordError.textContent = '';

    // Validate username
    if (!username.value.trim()) {
        userError.textContent = 'El usuario es requerido';
        username.parentElement.classList.add('shake');
        isValid = false;
    } else if (username.value.length < 3) {
        userError.textContent = 'El usuario debe tener al menos 3 caracteres';
        username.parentElement.classList.add('shake');
        isValid = false;
    }

    // Validate password
    if (!password.value) {
        passwordError.textContent = 'La contraseña es requerida';
        password.parentElement.classList.add('shake');
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres';
        password.parentElement.classList.add('shake');
        isValid = false;
    }

    return isValid;
}