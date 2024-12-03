document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const userInput = document.getElementById('nombre');
    const passwordInput = document.getElementById('password');
    const userError = document.getElementById('userError');
    const passwordError = document.getElementById('passwordError');
    const togglePassword = document.getElementById('togglePassword');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Form validation
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Reset errors
        userError.textContent = '';
        passwordError.textContent = '';
        userInput.parentElement.classList.remove('shake');
        passwordInput.parentElement.classList.remove('shake');

        // Validate username
        if (userInput.value.trim() === '') {
            userError.textContent = 'El usuario es requerido';
            userInput.parentElement.classList.add('shake');
            isValid = false;
        } else if (userInput.value.length < 3) {
            userError.textContent = 'El usuario debe tener al menos 3 caracteres';
            userInput.parentElement.classList.add('shake');
            isValid = false;
        }

        // Validate password
        if (passwordInput.value === '') {
            passwordError.textContent = 'La contraseña es requerida';
            passwordInput.parentElement.classList.add('shake');
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres';
            passwordInput.parentElement.classList.add('shake');
            isValid = false;
        }

        // If validation passes, submit the form
        if (isValid) {
            loginForm.submit();
        }
    });

    // Remove shake class after animation ends
    const removeShake = (element) => {
        element.addEventListener('animationend', () => {
            element.classList.remove('shake');
        });
    };

    removeShake(userInput.parentElement);
    removeShake(passwordInput.parentElement);

    // Real-time validation
    userInput.addEventListener('input', () => {
        userError.textContent = '';
    });

    passwordInput.addEventListener('input', () => {
        passwordError.textContent = '';
    });
});