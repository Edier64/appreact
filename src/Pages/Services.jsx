import React from 'react';
import Header from '../components/Header'; // Asegúrate de que el archivo de encabezado sea correcto
import './Services.css'; // Incluye los estilos necesarios

function Services() {
  return (
    <div className="Services">
      <Header />
      <section className="section-init">
        <div className="container t-center">
          <div className="w-50">
            <section className="b-verde section">
              <div className="container">
                <a className="h1" href="./recruiters.html"><h1>Reclutadores</h1></a>
              </div>
            </section>
          </div>
          <div className="w-50">
            <section className="b-rojo section">
              <div className="container">
                <a className="h1" href="./applicants.html"><h1>Aspirantes</h1></a>
              </div>
            </section>
          </div>
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

export default Services;
