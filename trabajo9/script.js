const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) => {
event.preventDefault(); // Evitar el envío del formulario por defecto

// Obtener los valores de los campos de entrada
const usuario = document.getElementById('usuario').value;
const contrasena = document.getElementById('contrasena').value;

// Validar las credenciales ingresadas
if (usuario === 'usuario123' && contrasena === 'contraseñaSecreta') {
alert('Inicio de sesión exitoso');
} else {
alert('Credenciales incorrectas.');
}
});