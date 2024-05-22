import React from 'react';
import { ReservaPorUsuario } from '../helper/reserva.js';

export const MisReservas = () => {
  const Autentificacion = JSON.parse(localStorage.getItem('user') || null);  
  const reservas = ReservaPorUsuario(Autentificacion.id);

  const formatTime = (time24) => {
    const [hours, minutes] = time24.split(':');
    const hours12 = hours % 12 || 12;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    return `${hours12}:${minutes} ${ampm}`;
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Mis Reservas</h2>
      {reservas.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Número de Personas</th>
              <th>Lugar</th>
              <th>Método de Pago</th>
              <th>Costo Total</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva, index) => (
              <tr key={index}>
                <td>{reserva.date}</td>
                <td>{formatTime(reserva.time)}</td>
                <td>{reserva.numPeople}</td>
                <td>{reserva.lugar}</td>
                <td>{reserva.creditCard}</td>
                <td>${reserva.totalCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No tienes reservas.</p>
      )}
    </div>
  );
};
