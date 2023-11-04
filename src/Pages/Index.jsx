import React from 'react';
import Header from '../components/Header.jsx'; // Asegúrate de que el archivo de encabezado sea correcto
import '../components/Header.css'; // Incluye los estilos necesarios

function Index() {
  return (
    <div className="Index">
      <Header />
      <section className="section-init">
        <div className="container">
          <img src="./img/img_home.avif" alt="" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          Employme.info es una plataforma innovadora y líder que conecta a
          reclutadores y candidatos en busca de oportunidades laborales
          excepcionales.<br /> Nuestra misión es simplificar el proceso de búsqueda de
          empleo y selección de talento, brindando a las empresas acceso a los
          mejores candidatos y ayudando a los profesionales a encontrar trabajos
          que impulsen sus carreras.
        </div>
        <br />
        <div className="container">
          Nos enorgullece ser una fuente confiable tanto para empleadores como para buscadores de empleo, y estamos comprometidos en simplificar y mejorar el camino hacia el éxito profesional.<br /> Únete a nosotros hoy y descubre cómo podemos impulsar tu carrera o ayudar a tu empresa a encontrar el talento que necesita.<br /> Tu futuro profesional comienza aquí.
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

export default Index;
