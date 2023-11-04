import React from 'react';
import Header from '../components/Header'; // Asegúrate de que el archivo de encabezado sea correcto

function Basic() {
  return (
    <div className="Basic">
      <Header />
      <section id="login" className="section">
        <div className="container">
          <h2>Login</h2>
          <form>
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />

            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      </section>

      <section id="registro" className="section">
        <div className="container">
          <h2>Registro</h2>
          <form>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required />

            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />

            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Registrarse</button>
          </form>
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="container">
          <h2>Servicios</h2>
          <div className="servicios">
            <div className="servicio">
              <h3>Para Reclutadores</h3>
              <ul>
                <li>Publicar Oferta</li>
                <li>Revisar Aplicaciones</li>
                <li>Reclutar Candidatos</li>
                <li>Cerrar Ofertas</li>
              </ul>
            </div>
            <div className="servicio">
              <h3>Para Aspirantes</h3>
              <ul>
                <li>Publicar CV</li>
                <li>Buscar Ofertas</li>
                <li>Aplicar Ofertas</li>
                <li>Estado de Procesos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="terminos" className="section">
        <div className="container">
          <h2>Términos y Condiciones</h2>
          {/* Contenido de Términos y Condiciones */}
        </div>
      </section>

      <section id="privacidad" className="section">
        <div className="container">
          <h2>Políticas de Privacidad</h2>
          {/* Contenido de Políticas de Privacidad */}
        </div>
      </section>

      <section id="contacto" className="section">
        <div className="container">
          <h2>Contáctanos</h2>
          {/* Información de contacto (Correo, Redes, Whatsapp) */}
        </div>
      </section>

      <section id="nosotros" className="section">
        <div className="container">
          <h2>Quiénes Somos</h2>
          {/* Información sobre la empresa, historia y equipo */}
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2023 Bolsa de Empleo</p>
        </div>
      </footer>
    </div>
  );
}

export default Basic;
