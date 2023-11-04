import React, { useState } from 'react';
import Header from '../components/Header'; // Asegúrate de que el archivo de encabezado sea correcto
// import connect from '../BD/Supabase.js'; // Asegúrate de importar la instancia de Supabase

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState(''); // Cambié 'Nombre' a 'nombre'

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const supabase = connect();
      const { data, error } = await supabase
        .from('login')
        .insert([{ Email: email, Pass: password }]) // Inserta el nombre y el email
        .single();

      if (error) {
        console.error('Error al registrar:', error.message);
      } else {
        console.log('Registro exitoso. Usuario:', data);
        // Puedes redirigir al usuario o realizar otras acciones después del registro exitoso
      }
    } catch (error) {
      console.error('Error al registrar:', error.message);
    }
  }

  return (
    <div className="Register">
      <Header />
      <section className="section-init">
        <div className="container">
          <h2>Registro</h2>
          <form onSubmit={handleRegister}> {/* Agregué el onSubmit para manejar el registro */}
            <label htmlFor="nombre">Nombre</label> {/* Cambié 'for' a 'htmlFor' */}
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

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
