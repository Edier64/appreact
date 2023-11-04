import React from 'react';
import Header from '../components/Header'; // Asegúrate de que el archivo de encabezado sea correcto

function ServicesRecruiters() {
  const [seccionActual, setSeccionActual] = React.useState(1);

  function mostrar(id) {
    setSeccionActual(id);
  }

  return (
    <div className="ServicesRecruiters">
      <Header />
      <section className="section-init">
        <h2>Reclutadores</h2>
        <div className="w-100">
          <div className="w-50">
            <section className="section">
              <div className="container">
                <ul className="cursor">
                  <li onClick={() => mostrar(1)}>Publicar Oferta</li>
                  <li onClick={() => mostrar(2)}>Revisar Aplicaciones</li>
                  <li onClick={() => mostrar(3)}>Cerrar Ofertas</li>
                </ul>
              </div>
            </section>
          </div>
          <div className="w-50">
            <section className="section">
              <div className="container">
                <div className="mostrar" id={1 === seccionActual ? 1 : ''}>
                  <form action="procesar_hoja_de_vida.php" method="post">
                    <label for="titulo">Titulo:</label>
                    <input type="text" id="titulo" name="titulo" required />

                    <label for="descripcion">Descripción:</label>
                    <input type="text" id="descripcion" name="descripcion" required />

                    <label for="salario">Salario:</label>
                    <input type="text" id="salario" name="salario" required />

                    <input type="submit" value="Guardar" />
                  </form>
                </div>
                <div className="mostrar" id={2 === seccionActual ? 2 : ''}>
                  <table>
                    <tr>
                      <th>Nombre</th>
                      <th>Titulo</th>
                      <th>Hoja de vida</th>
                      <th>Reclutar</th>
                    </tr>
                    <tr>
                      <td>Jhon</td>
                      <td>Desarrollador</td>
                      <td><button>ver</button></td>
                      <td><button>ir</button></td>
                    </tr>
                    <tr>
                      <td>Sebastian</td>
                      <td>Desarrollador</td>
                      <td><button>ver</button></td>
                      <td><button>ir</button></td>
                    </tr>
                    <tr>
                      <td>Henry</td>
                      <td>Desarrollador</td>
                      <td><button>ver</button></td>
                      <td><button>ir</button></td>
                    </tr>
                  </table>
                </div>
                <div className="mostrar" id={3 === seccionActual ? 3 : ''}>
                  <table>
                    <tr>
                      <th>Titulo</th>
                      <th>Descripción</th>
                      <th>Cerrar</th>
                    </tr>
                    <tr>
                      <td>Desarrollador</td>
                      <td>Prueba</td>
                      <td><button>ir</button></td>
                    </tr>
                    <tr>
                      <td>Contador</td>
                      <td>Prueba</td>
                      <td><button>ir</button></td>
                    </tr>
                    <tr>
                      <td>Asistente</td>
                      <td>Prueba</td>
                      <td><button>ir</button></td>
                    </tr>
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

export default ServicesRecruiters;