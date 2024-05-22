import React, { useState } from 'react';
import { ReservaUsuario } from '../helper/reserva.js';

export const Reserva = () => {
  const Autentificacion = JSON.parse(localStorage.getItem('user') || null);
  const [reservation, setReservation] = useState({
    numPeople: 2,
    date: '',
    time: '',
    creditCard: 'Efectivo',
    totalCost: 200,
    lugar: 'Mariscos del Rey',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservation((prevState) => ({
      ...prevState,
      [name]: value,
      totalCost: name === 'numPeople' ? parseInt(value) * 100 : prevState.totalCost,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { numPeople, date, time, creditCard, totalCost, lugar } = reservation;
    
    const reserva = ReservaUsuario(numPeople, date, time, creditCard,totalCost, Autentificacion.id,lugar);
    
    if(reserva){
        setReservation({
            numPeople: 2,
            date: '',
            time: '',
            creditCard: '',
            totalCost: 200,
            lugar: '',
        });
    }
  
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="card shadow-sm">
          <div className="card-header" style={{ backgroundColor: '#f8f9fa', color: '#495057' }}>
            <h2 className="mb-0">
              <i className="fas fa-utensils"></i> Reserva tu Mesa
            </h2>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="numPeople" className="form-label">
                  <i className="fas fa-users"></i> Número de Personas
                </label>
                <select
                  className="form-select"
                  id="numPeople"
                  name="numPeople"
                  value={reservation.numPeople}
                  onChange={handleInputChange}
                >
                  <option value="2">2 Personas</option>
                  <option value="3">3 Personas</option>
                  <option value="4">4 Personas</option>
                  <option value="5">5 Personas</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  <i className="fas fa-calendar-alt"></i> Fecha
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={reservation.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label">
                  <i className="fas fa-clock"></i> Hora
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="time"
                  name="time"
                  value={reservation.time}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="creditCard" className="form-label">
                  <i className="fas fa-credit-card"></i> Metodo de Pago
                </label>
                <select
                  className="form-select"
                  id="creditCard"
                  name="creditCard"
                  value={reservation.creditCard}
                  onChange={handleInputChange}
                >
                  <option value="Efectivo">Efectivo</option>
                  <option value="Tarjeta">Tarjeta</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="lugar" className="form-label">
                  <i className="fas fa-utensils"></i> Lugar
                </label>
                <select
                  className="form-select"
                  id="lugar"
                  name="lugar"
                  value={reservation.lugar}
                  onChange={handleInputChange}
                >
                  <option value="Mariscos del Rey">Mariscos del Rey</option>
                  <option value="Carnes y Brasas">Carnes y Brasas</option>
                  <option value="Sushi Niwa">Sushi Niwa</option>
                  <option value="Pizza Artigianale">Pizza Artigianale</option>
                  <option value="Cocina Vegana Moderna">Cocina Vegana Moderna</option>
                  <option value="El Bistro Francés">El Bistro Francés</option>
                  <option value="Sabores de India">Sabores de India</option>
                  <option value="Café y Postres">Café y Postres</option>
                </select>
              </div>


              <div className="mb-3">
                <label className="form-label">
                  <i className="fas fa-dollar-sign"></i> Costo Total
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={`$${reservation.totalCost}`}
                  readOnly
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Reservar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};