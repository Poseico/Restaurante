import Swal from 'sweetalert2';
import { Reserva } from '../data/Reservas.js';

export const ReservaUsuario = (numPeople, date, time, creditCard, totalCost, IdUsuario, lugar) => {

    if (!numPeople || !date || !time || !creditCard || !totalCost || !IdUsuario || !lugar) {
        Swal.fire({
            icon: 'error',
            title: 'Error en la reserva',
            text: 'Todos los campos deben ser completados.',
        });
        return; 
    }

    // Validación de conflicto de reserva
    const reservasExistentes = Reserva.filter(reserva => 
        reserva.date === date && reserva.time === time && reserva.lugar === lugar
    );

    if (reservasExistentes.length > 0) {
        Swal.fire({
            icon: 'error',
            title: 'Conflicto de reserva',
            text: 'Ya existe una reserva para este lugar en la fecha y hora seleccionada.',
        });
    } else {
        const nuevaReserva = {
            numPeople, 
            date, 
            time, 
            creditCard, 
            totalCost, 
            IdUsuario, 
            lugar
        };

        // Suponiendo que 'Reserva' es un arreglo mutable donde puedes añadir nuevas reservas
        Reserva.push(nuevaReserva);
        
        Swal.fire({
            icon: 'success',
            title: '¡Reserva confirmada!',
            text: 'Tu reserva ha sido exitosamente confirmada.',
        });

        return true;
    }
}

export const ReservaPorUsuario = (IdUsuario) => {
    return Reserva.filter(reserva => reserva.IdUsuario == IdUsuario);
}