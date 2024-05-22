import React from 'react'
import { Link } from 'react-router-dom'

export const CardRestaurante = ({restaurante}) => {
  return (
    <div style={{
      width: '400px',
      margin: '10px',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Añadiendo sombra
      backgroundColor: '#fff' // Fondo blanco para destacar la sombra
  }}>
      <img src={restaurante.imagenUrl} alt={restaurante.nombre} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{restaurante.nombre}</h3>
      <p>{restaurante.descripcion}</p>


      <Link to={`/restaurante/${restaurante.nombre}`}>
         <button className='btn btn-primary'>Ver Menú</button>
      </Link>
 
  </div> 
  )
}
