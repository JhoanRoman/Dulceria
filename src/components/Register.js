import React, { useState } from 'react';
import '../styles/auth.css'; // Asegúrate de la ruta correcta

const Register = ({ onRegister, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular el registro, debes reemplazar esto con tu lógica de registro
    const userData = { email };
    onRegister(userData);
  };

  return (
    <div className="auth-container">
      <h2>Registrarse</h2>
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
        <button type="submit">Registrarse</button>
      </form>
      <p>Ya tienes una cuenta? <button onClick={onSwitchToLogin}>Inicia Sesión</button></p>
    </div>
  );
};

export default Register;
