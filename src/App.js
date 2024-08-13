// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Asegúrate de importar el archivo CSS
import Login from './components/Login';
import Register from './components/Register';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <h1>
              <Link to="/" className="logo">MiDulceOnline</Link>
            </h1>
            <nav>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <h2>MiDulceOnline</h2>
              <p>&copy; 2024 MiDulceOnline. Todos los derechos reservados.</p>
            </div>
            <div className="footer-middle">
              <h3>Información</h3>
              <ul>
                <li><a href="#about">Sobre Nosotros</a></li>
                <li><a href="#products">Nuestros Productos</a></li>
                <li><a href="#contact">Contáctanos</a></li>
                <li><a href="#faq">Preguntas Frecuentes</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Desarrollado por Johan Roman</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
