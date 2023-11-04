import React from 'react';
import Header from '../components/Header'; // Asegúrate de que el archivo de encabezado sea correcto

function Applicants() {
    const [seccionActual, setSeccionActual] = React.useState(1);
  
    function mostrar(id) {
      setSeccionActual(id);
    }
  
    return (
      <div className="Applicants">
        <Header />
        <section className="section-init">
          <h2>Aspirantes</h2>
          <div className="w-100">
            <div className="w-50">
              <section className="section">
                <div className="container">
                  {/* Contenido para la sección izquierda */}
                  <ul className="cursor">
                    <li onClick={() => mostrar(1)}>Publicar CV</li>
                    <li onClick={() => mostrar(2)}>Buscar Ofertas</li>
                    <li onClick={() => mostrar(3)}>Estado de Procesos</li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="w-50">
              <section className="section">
                <div className="container">
                  {/* Contenido para la sección derecha */}
                  <div className={`mostrar ${1 === seccionActual ? 'mostrar' : ''}`}>
                    <form action="procesar_hoja_de_vida.php" method="post">
                      {/* Contenido del formulario */}
                    </form>
                  </div>
                  <div className={`mostrar ${2 === seccionActual ? 'mostrar' : ''}`}>
                    <table>
                      {/* Contenido de la tabla de ofertas */}
                    </table>
                  </div>
                  <div className={`mostrar ${3 === seccionActual ? 'mostrar' : ''}`}>
                    <table>
                      {/* Contenido de la tabla de estado de procesos */}
                    </table>
                  </div>
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
  
  export default Applicants;
  