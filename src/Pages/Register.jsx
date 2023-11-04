import React from 'react';
import Header from '../components/Header'; // Asegúrate de que el archivo de encabezado sea correcto

function Register() {
  return (
    <div className="Register">
      <Header />
      <section className="section-init">
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

      <footer>
        <div className="container">
          <p>&copy; 2023 Bolsa de Empleo</p>
        </div>
      </footer>
    </div>
  );
}

export default Register;
