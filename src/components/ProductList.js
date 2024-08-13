import React from 'react';

const ProductList = ({ filters }) => {
  const products = [
    { id: 1, name: 'Arequipe', category: 'Gummies', region: 'North', price: 30 },
    { id: 2, name: 'Bocadillo Veleño', category: 'Gummies', region: 'South', price: 20 },
    { id: 3, name: 'Chocoramo', category: 'Chocolates', region: 'East', price: 500 },
    // Agrega más productos aquí
  ];

  const filteredProducts = products.filter(product => {
    return (
      (filters.category === 'All' || product.category === filters.category) &&
      (filters.region === 'All' || product.region === filters.region) &&
      (filters.price === 'All' ||
        (filters.price === '0-50' && product.price <= 50) ||
        (filters.price === '51-100' && product.price > 50 && product.price <= 100) ||
        (filters.price === '101-200' && product.price > 100 && product.price <= 200) ||
        (filters.price === '201+' && product.price > 200))
    );
  });

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default ProductList;
