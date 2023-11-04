import React from 'react';
import '../components/Header.css';
import Index from "../Pages/Index.jsx"
import Login from "../Pages/Login.jsx";
import Basic from "../Pages/Basic.jsx";
import Applicants from "../Pages/Applicants.jsx";
import Recruiters from "../Pages/Recruiters.jsx";
import Register from "../Pages/Register.jsx";
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header>
      <div className="container">
        <h1>Bolsa de Empleo</h1>
        <nav>
          <ul>
            <li><Link to="/Index">Index</Link></li>
            <li><Link to="/Services">Servicios</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Register">Registro</Link></li>
            <li><Link to="/terminos">Términos y Condiciones</Link></li>
            <li><Link to="/privacidad">Políticas de Privacidad</Link></li>
            <li><Link to="/contacto">Contáctanos</Link></li>
            <li><Link to="/nosotros">Quiénes Somos</Link></li>
            <li><Link to="/UserProfile">Usuario</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
