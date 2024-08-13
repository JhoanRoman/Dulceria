import React from 'react';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para iniciar sesión
    console.log('Inicio de sesión completado');
  };

  return (
    <div className="login">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
