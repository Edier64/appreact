import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import '../components/Header.css'; 
//import connect from '../BD/Supabase.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const supabase = connect();
      let { data: users, error } = await supabase
        .from('login')
        .select('Email, Pass')
        .eq('Email', email);

      if (error) {
        console.error('Error al iniciar sesión:', error.message);
      } else {
        console.log('Inicio de sesión exitoso. Usuario:', users[0]);
        // Puedes acceder al primer usuario en el array users si se encontró un resultado.
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  }

  return (
    <div className="Login">
      <Header />
      <section id="login" className="section-init">
        <div className="container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
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

            <button type="submit">Iniciar Sesión</button>
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

export default Login;
