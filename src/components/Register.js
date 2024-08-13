import React, { useState } from 'react';

const Register = () => {
  const [userType, setUserType] = useState('Customer');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para registrar un usuario
    console.log('Registro completado');
  };

  return (
    <div className="register">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tipo de usuario:
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="Customer">Cliente</option>
            <option value="Vendor">Proveedor</option>
          </select>
        </label>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
