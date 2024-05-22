import Swal from 'sweetalert2';
import { usuarios } from '../data/User';

export const RegisterUser = ({ nombre, apellido, usuario, password }) => {
    // Primero verifica si todos los campos están llenos
    if (!nombre.trim() || !apellido.trim() || !usuario.trim() || !password.trim()) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios.',
        });
        return;  // Salir de la función si hay error
    }
    
    // Verifica si el nombre de usuario ya existe
    const usuarioExiste = usuarios.some(u => u.usuario === usuario);
    if (usuarioExiste) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre de usuario ya está en uso.',
        });
        return;  // Salir de la función si hay error
    }
    
    // Crea el nuevo usuario y lo añade al array
    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre,
        apellido,
        usuario,
        password
    };
    usuarios.push(nuevoUsuario);

    // Muestra una alerta de éxito
    Swal.fire({
        icon: 'success',
        title: '¡Registrado!',
        text: 'Usuario creado exitosamente.',
    });
    
    return true;
};


export const LoginUser = ({ usuario, password }) => {
    const user = usuarios.find(u => u.usuario === usuario && u.password === password);
    if (!user) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos.',
        });
        return;  // Salir de la función si hay error
    }
    
    const userWithStatus = {
        ...user,
        estado: true
    };

    localStorage.setItem('user', JSON.stringify(userWithStatus));
    window.dispatchEvent(new Event('storage'));

    return true;
}