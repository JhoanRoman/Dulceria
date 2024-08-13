import React from 'react';
import EditProduct from './EditProduct';

const ProductList = ({ productos, onEditProduct, onDeleteProduct }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - {producto.precio}
            <EditProduct producto={producto} onEditProduct={onEditProduct} />
            <button onClick={() => onDeleteProduct(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
