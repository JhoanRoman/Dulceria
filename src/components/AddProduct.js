import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(), // Genera un ID único basado en el tiempo
      nombre,
      precio,
    };
    onAddProduct(newProduct);
    setNombre('');
    setPrecio('');
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del producto" required />
        <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" required />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddProduct;
