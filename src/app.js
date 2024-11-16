import { sendData } from '../src/components/api.js';

document.getElementById('registro').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validaciones
    if (!email || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Validar formato del correo (opcional)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    try {
        const data = await sendData('login', { email, password }); // Ajusta el endpoint según tu API
        

        // Manejar la respuesta del backend
        if (data.success) {
            alert("Sesión iniciado correctamente.");
        } else {
            alert(data.message); // Mostrar mensaje de error
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al iniciar sesión.'); // Mensaje de error general
    }
});