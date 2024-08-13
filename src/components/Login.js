import React, { useState } from 'react';
import '../styles/auth.css'; // Asegúrate de la ruta correcta

const Login = ({ onLogin, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular el login, debes reemplazar esto con tu lógica de autenticación
    const userData = { email };
    onLogin(userData);
  };

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>No tienes una cuenta? <button onClick={onSwitchToRegister}>Registrate</button></p>
    </div>
  );
};

export default Login;
