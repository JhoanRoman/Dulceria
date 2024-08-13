import React, { useState } from 'react';
import FilterBar from './FilterBar';
import ProductList from './ProductList';

const ProductPage = () => {
  const [filters, setFilters] = useState({
    category: 'All',
    region: 'All',
    price: 'All',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="product-page">
      <section id="about" className="container">
        <h2>Sobre Nosotros</h2>
        <p>
          Bienvenidos a MiDulceOnline, donde encontrarás los mejores dulces típicos colombianos. Nuestra misión es ofrecer los productos más frescos y auténticos a nuestros clientes.
        </p>
        <img
          src="path_to_your_image.jpg"
          alt="Dulces colombianos"
          className="about-image"
        />
      </section>

      <section id="products" className="container">
        <h2>Nuestros Productos</h2>
        <FilterBar onFilterChange={handleFilterChange} />
        <ProductList filters={filters} />
      </section>
    </div>
  );
};

export default ProductPage;
