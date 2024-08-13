// src/components/FilterBar.js
import React from 'react';
import './FilterBar.css'; // Importar el archivo CSS para el filtro

const FilterBar = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className="filter-bar">
      <select name="category" onChange={handleFilterChange}>
        <option value="All">Categoría: Todas</option>
        <option value="Sweets">Dulces</option>
        <option value="Chocolates">Chocolates</option>
        <option value="Gummies">Gomitas</option>
        <option value="Candies">Caramelos</option>
      </select>
      <select name="region" onChange={handleFilterChange}>
        <option value="All">Región: Todas</option>
        <option value="North">Norte</option>
        <option value="South">Sur</option>
        <option value="East">Este</option>
        <option value="West">Oeste</option>
      </select>
      <select name="price" onChange={handleFilterChange}>
        <option value="All">Precio: Todos</option>
        <option value="Low">Bajo</option>
        <option value="Medium">Medio</option>
        <option value="High">Alto</option>
      </select>
    </div>
  );
};

export default FilterBar;
