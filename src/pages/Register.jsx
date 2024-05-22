import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus, faLock, faIdCard, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';  
import { RegisterUser } from '../helper/Auth.js';

export const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  
  const onRegistrarseClick = (event) => {
    event.preventDefault();
    const registrado = RegisterUser({nombre, apellido, usuario, password});
    
    if(registrado) {
      setNombre('');
      setApellido('');
      setUsuario('');
      setPassword('');
    }
  }

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center" style={{ overflowY: 'hidden' }}>
      <div className="card shadow p-3 mb-5 bg-white rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-3">Registrarse</h2>
        <form>
          <div className="form-group">
            <label htmlFor="emailInput">Nombre:</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ width: '42px', height: '42px' }}><FontAwesomeIcon icon={faUser} /></span>
              </div>
              <input
                id="emailInput"
                type="text"
                className="form-control"
                value={nombre}
                placeholder="Digite su nombre: "
                onChange={(e) => setNombre(e.target.value)}
                style={{ paddingLeft: '5px' }}
              />
            </div>
          </div>
         
          <div className="form-group">
            <label htmlFor="apellidoInput">Apellido:</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ width: '42px', height: '42px' }}><FontAwesomeIcon icon={faUserCircle} /></span>
              </div>
              <input
                id="apellidoInput"
                type="text"
                className="form-control"
                value={apellido}
                placeholder="Digite su apellido: "
                onChange={(e) => setApellido(e.target.value)}
                style={{ paddingLeft: '5px' }}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="EmailInput">Usuario:</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ width: '42px', height: '42px' }}><FontAwesomeIcon icon={faIdCard} /></span>
              </div>
              <input
                id="EmailInput"
                type="text"
                className="form-control"
                value={usuario}
                placeholder="Digite su usuario: "
                onChange={(e) => setUsuario(e.target.value)}
                style={{ paddingLeft: '5px' }}
              />
            </div>
          </div>



          <div className="form-group">
            <label htmlFor="passwordInput">Contraseña:</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ width: '42px', height: '42px' }}><FontAwesomeIcon icon={faLock} /></span>
              </div>
              <input
                id="passwordInput"
                type="password"
                className="form-control"
                value={password}
                placeholder="Digite su contraseña: "
                onChange={(e) => setPassword(e.target.value)} 
                style={{ paddingLeft: '5px' }}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3" onClick={onRegistrarseClick}>Registrarse</button>
        </form>
        <p className="text-center mt-3">
          ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link> {/* Navegación hacia el inicio de sesión */}
        </p>
      </div>
    </div>
  );
};
