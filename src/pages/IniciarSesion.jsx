import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { LoginUser } from '../helper/Auth.js';

export const IniciarSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegistrarseClick = (event) => {
      event.preventDefault();
      
      const user = LoginUser({ usuario: email, password });
  }

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow p-3 mb-5 bg-white rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-3">Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor='emailInput'>Email:</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ width: '42px', height: '42px' }}><FontAwesomeIcon icon={faEnvelope} /></span>
              </div>
              <input 
                 id="emailInput"
                 type="email" 
                 className="form-control" 
                 placeholder='Digite su correo electronico: '
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)} style={{ paddingLeft: '5px' }} />
            </div>
          </div>

          <div className="form-group mt-2">
            <label htmlFor='passwordInput'>Contraseña:</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ width: '42px', height: '42px' }}><FontAwesomeIcon icon={faLock} /></span>
              </div>
              <input 
                id="passwordInput"
                type="password" 
                className="form-control" 
                value={password} 
                placeholder='Digite su contraseña: '
                onChange={(e) => setPassword(e.target.value)} 
                style={{ paddingLeft: '5px' }} />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary w-100 mt-3" onClick={onRegistrarseClick}>Iniciar Sesión</button>
        </form>

        <p className="text-center mt-3">
          ¿No tienes cuenta? <Link to="/registrarse">Regístrate</Link>
        </p>

      </div>
    </div>
  );
};
