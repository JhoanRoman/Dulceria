import React, { useState } from 'react';

const EditProduct = ({ producto, onEditProduct }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [nombre, setNombre] = useState(producto.nombre);
  const [precio, setPrecio] = useState(producto.precio);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = { ...producto, nombre, precio };
    onEditProduct(updatedProduct);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
        </form>
      ) : (
        <button onClick={() => setIsEditing(true)}>Editar</button>
      )}
    </div>
  );
};

export default EditProduct;
