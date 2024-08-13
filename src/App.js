import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>
            <Link to="/">Dulcería Online</Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <>
                  <section id="about" className="container">
                    <h2>Sobre Nosotros</h2>
                    <p>
                      Bienvenidos a nuestra dulcería online, donde la dulzura se
                      encuentra con la calidad. Nuestra misión es ofrecer los
                      mejores dulces y golosinas a nuestros clientes, utilizando
                      solo los ingredientes más frescos y de alta calidad. Cada
                      producto que ofrecemos es elaborado con amor y atención al
                      detalle, para que puedas disfrutar de un momento dulce en
                      cada bocado.
                    </p>
                    <img
                      src="path_to_your_image.jpg"
                      alt="Dulces variados"
                      className="about-image"
                    />
                  </section>

                  <section id="products" className="container">
                    <h2>Nuestros Productos</h2>
                    <p>
                      Explora nuestra amplia variedad de dulces, desde gomitas
                      hasta chocolates, todos disponibles para su compra online.
                      Nuestros productos son ideales para cualquier ocasión, ya
                      sea una fiesta, un regalo o simplemente para disfrutar en
                      casa.
                    </p>
                    <ul className="product-list">
                      <li>🍬 Gomitas de frutas</li>
                      <li>🍫 Chocolates artesanales</li>
                      <li>☕ Caramelos de café</li>
                      <li>🍡 Malvaviscos</li>
                      <li>🎉 Mezcla de golosinas para fiestas</li>
                      <li>🍭 Piruletas de diferentes sabores</li>
                    </ul>
                  </section>

                  <section id="testimonials" className="container">
                    <h2>Testimonios</h2>
                    <blockquote>
                      "¡Los mejores dulces que he probado! Siempre frescos y
                      deliciosos." - Ana M.
                    </blockquote>
                    <blockquote>
                      "La entrega fue rápida y todo llegó en perfectas
                      condiciones. ¡Recomiendo esta dulcería!" - Juan P.
                    </blockquote>
                    <blockquote>
                      "Simplemente encantada con la variedad y calidad de los
                      productos." - Laura S.
                    </blockquote>
                  </section>

                  <section id="faq" className="container">
                    <h2>Preguntas Frecuentes</h2>
                    <div className="faq-item">
                      <h3>¿Cómo puedo realizar un pedido?</h3>
                      <p>
                        Simplemente navega por nuestros productos, agrégales al
                        carrito y sigue las instrucciones para el pago.
                      </p>
                    </div>
                    <div className="faq-item">
                      <h3>¿Realizan envíos a domicilio?</h3>
                      <p>
                        Sí, hacemos envíos a domicilio en toda la ciudad.
                        Consulta nuestras tarifas de envío en la sección de
                        pagos.
                      </p>
                    </div>
                    <div className="faq-item">
                      <h3>¿Puedo hacer un pedido personalizado?</h3>
                      <p>
                        Por supuesto, contáctanos a través de nuestra sección de
                        contacto y estaremos encantados de ayudarte.
                      </p>
                    </div>
                  </section>

                  <section id="contact" className="container">
                    <h2>Contáctanos</h2>
                    <p>
                      Si tienes alguna pregunta o deseas realizar un pedido
                      especial, no dudes en contactarnos. Estamos aquí para
                      ayudarte a satisfacer tus antojos de dulces.
                    </p>
                    <form>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        required
                        className="input-field"
                      />
                      <input
                        type="email"
                        placeholder="Tu correo"
                        required
                        className="input-field"
                      />
                      <textarea
                        placeholder="Tu mensaje"
                        required
                        className="textarea-field"
                      ></textarea>
                      <button type="submit" className="submit-button">
                        Enviar
                      </button>
                    </form>
                  </section>
                </>
              }
            />
          </Routes>
        </main>

        <footer className="footer">
  <div className="footer-content">
    <div className="footer-left">
      <h2>Dulcería Online</h2>
      <p>&copy; 2024 Dulcería Online. Todos los derechos reservados.</p>
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
