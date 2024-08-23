document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contactForm');
    const feedback = document.querySelector('#formFeedback');
    const submitButton = document.querySelector('#submitButton');
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');

    function validateForm() {
        let isValid = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
            }
        });
        submitButton.disabled = !isValid;
    }

    // Verifica la validez de los campos en tiempo real
    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        // Validación básica
        if (name === '' || email === '' || message === '') {
            feedback.textContent = 'Por favor, complete todos los campos.';
            return;
        }

        // Validación del formato del correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            feedback.textContent = 'Por favor, ingrese un correo electrónico válido.';
            return;
        }

        // Si pasan todas las validaciones...
        feedback.textContent = 'Formulario enviado correctamente. ¡Gracias por contactarnos!';
        form.reset(); 
        submitButton.disabled = true;
    });

    // Inicializa el estado del botón de enviar
    validateForm();
});
